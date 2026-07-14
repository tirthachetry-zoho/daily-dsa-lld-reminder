// Lightweight in-memory rate limiter + cache (no external deps).
// Suitable for a single-instance / serverless warm-pool deployment.
// For multi-region scale, swap these for Redis/Upstash.

interface RateBucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, RateBucket>();
const cacheStore = new Map<string, { value: unknown; expiresAt: number }>();

/**
 * Sliding-fixed-window rate limiter.
 * @returns true if the request is allowed, false if it should be blocked.
 */
export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): { allowed: boolean; remaining: number; retryAfterSec: number } {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfterSec: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSec: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: limit - existing.count,
    retryAfterSec: 0,
  };
}

/** Simple TTL cache get. */
export function cacheGet<T>(key: string): T | undefined {
  const entry = cacheStore.get(key);
  if (!entry) return undefined;
  if (entry.expiresAt <= Date.now()) {
    cacheStore.delete(key);
    return undefined;
  }
  return entry.value as T;
}

/** Simple TTL cache set. */
export function cacheSet<T>(key: string, value: T, ttlMs: number): void {
  cacheStore.set(key, { value, expiresAt: Date.now() + ttlMs });
}

/** Build a per-IP key with a namespace. */
export function clientKey(
  request: Request,
  namespace: string
): string {
  const fwd = request.headers.get("x-forwarded-for");
  const ip = fwd ? fwd.split(",")[0].trim() : "local";
  return `${namespace}:${ip}`;
}