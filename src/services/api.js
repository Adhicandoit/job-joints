// Single data-access entry point.
// If VITE_API_URL is set we try the network first; on any failure (or when unset)
// we resolve with the bundled fallback so the UI never ends up empty or broken.
const BASE_URL = import.meta.env.VITE_API_URL;
const TIMEOUT_MS = 5000;
const cache = new Map();

async function fetchJson(path) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${BASE_URL}${path}`, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

export function request(path, fallback) {
  if (cache.has(path)) return cache.get(path);

  const promise = (async () => {
    if (!BASE_URL) return fallback;
    try {
      return await fetchJson(path);
    } catch (err) {
      console.warn(`[api] ${path} failed, using fallback:`, err.message);
      return fallback;
    }
  })();

  // Don't cache rejections; successful (or fallback) results are reused.
  promise.catch(() => cache.delete(path));
  cache.set(path, promise);
  return promise;
}
