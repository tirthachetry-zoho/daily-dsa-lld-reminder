// Lightweight in-memory TTL cache (no external deps).
// Suitable for a single-instance / serverless warm-pool deployment.
// For multi-region scale, swap for Redis/Upstash.

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

const store = new Map<string, CacheEntry<unknown>>();

/** Get a cached value, or undefined if missing/expired. */
export function cacheGet<T>(key: string): T | undefined {
  const entry = store.get(key);
  if (!entry) return undefined;
  if (entry.expiresAt <= Date.now()) {
    store.delete(key);
    return undefined;
  }
  return entry.value as T;
}

/** Store a value with a TTL in milliseconds. */
export function cacheSet<T>(key: string, value: T, ttlMs: number): void {
  store.set(key, { value, expiresAt: Date.now() + ttlMs });
}

/** Remove a single key (e.g. on write to keep reads fresh). */
export function cacheDelete(key: string): void {
  store.delete(key);
}

/** Remove all keys sharing a prefix (e.g. `user:email:`). */
export function cacheDeleteByPrefix(prefix: string): void {
  for (const key of store.keys()) {
    if (key.startsWith(prefix)) store.delete(key);
  }
}

// Common TTLs
export const TTL = {
  SHORT: 15_000, // 15s — user-specific lists that change on interaction
  MEDIUM: 30_000, // 30s — user record
  LONG: 5 * 60_000, // 5m — problem catalog (rarely changes)
  ACTIVE_USERS: 60_000, // 1m — reminder job source
};