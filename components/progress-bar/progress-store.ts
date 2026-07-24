// Tiny external store tracking how many <Link>s are currently mid-navigation.
// Consumed by TopProgressBar via useSyncExternalStore.

let pendingCount = 0;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getPendingCount() {
  return pendingCount;
}

// Server snapshot — nothing is ever pending during SSR.
export function getServerPendingCount() {
  return 0;
}

export function startProgress() {
  pendingCount += 1;
  emit();
}

export function doneProgress() {
  pendingCount = Math.max(0, pendingCount - 1);
  emit();
}
