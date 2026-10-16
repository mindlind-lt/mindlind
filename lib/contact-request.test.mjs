import assert from 'node:assert/strict';
import { test } from 'node:test';
import { submitContact } from './contact-request.ts';

const fields = () => {
  const data = new FormData();
  data.set('name', 'Local test');
  data.set('email', 'test@example.com');
  data.set('goal', 'Website erneuern');
  data.set('source', '/praxis');
  return data;
};

test('sends selected goal and attribution without modifying the original fields', async () => {
  const data = fields();
  await submitContact(data, { request: async (url, options) => {
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    assert.equal(options.body.get('goal'), 'Website erneuern');
    assert.equal(options.body.get('source'), '/praxis');
    assert.ok(options.body.get('access_key'));
    return Response.json({ success: true });
  }});
  assert.equal(data.has('access_key'), false);
});

for (const [name, response] of [
  ['provider rejection', () => Response.json({success:false})],
  ['HTTP failure even with success payload', () => Response.json({success:true}, {status:503})],
  ['malformed response', () => new Response('<html>Error</html>')],
  ['ambiguous acknowledgement', () => Response.json({success:'true'})],
]) {
  test(`does not report success on ${name}`, async () => {
    const data = fields();
    await assert.rejects(submitContact(data, {request:async () => response()}));
    assert.equal(data.get('email'), 'test@example.com');
  });
}

test('propagates network failure', async () => {
  await assert.rejects(submitContact(fields(), {request:async () => {throw new TypeError('Offline');}}));
});

test('aborts a stalled request so the form can recover', async () => {
  await assert.rejects(submitContact(fields(), {timeoutMs:10, request:async (_url, {signal}) => {
    return new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(new Error('Aborted')), {once:true}));
  }}), /Aborted/);
});
