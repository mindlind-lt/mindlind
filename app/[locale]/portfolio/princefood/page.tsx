'use client';

import { useTransitionIn } from '@/components/page-transition/use-transition-in';

export default function CasePrinceFood() {
  useTransitionIn();

  return (
    <main style={{ padding: '4rem 2rem', minHeight: '100vh', background: '#111', color: '#fff' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Coming soon</h1>
    </main>
  );
}
