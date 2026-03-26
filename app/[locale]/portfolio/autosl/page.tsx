'use client';

import { useEffect } from 'react';
import { useTransitionIn } from '@/components/page-transition/use-transition-in';

export default function CaseAutosl() {
  useTransitionIn();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://autosl.de';
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ padding: '4rem 2rem', minHeight: '100vh', background: '#111', color: '#fff' }}>
      <div>Redirecting...</div>
    </main>
  );
}
