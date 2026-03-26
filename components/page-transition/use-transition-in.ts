'use client';

import { useEffect } from 'react';
import { usePageTransition } from './page-transition-provider';

/**
 * Call this hook at the top of any page that should animate the transition
 * overlay away after arriving via navigateTo().
 */
export function useTransitionIn() {
  const { revealPage } = usePageTransition();

  useEffect(() => {
    revealPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
