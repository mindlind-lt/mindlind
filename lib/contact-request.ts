/** Web3Forms' public client access key, already used by the site's contact form. */
const ACCESS_KEY = "f468242c-5a67-475c-b609-984b59fa5e28";
const ENDPOINT = "https://api.web3forms.com/submit";

/** Only a successful HTTP response with an explicit acknowledgement counts. */
export async function submitContact(
  fields: FormData,
  { request = fetch, timeoutMs = 15000 }: { request?: typeof fetch; timeoutMs?: number } = {},
): Promise<void> {
  const body = new FormData();
  for (const [key, value] of fields) body.append(key, value);
  body.set("access_key", ACCESS_KEY);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await request(ENDPOINT, {
      method: "POST",
      body,
      signal: controller.signal,
    });
    const result: unknown = await response.json();
    if (!response.ok || typeof result !== "object" || result === null ||
        !("success" in result) || result.success !== true) {
      throw new Error("Contact submission was not acknowledged");
    }
  } finally {
    clearTimeout(timeout);
  }
}
