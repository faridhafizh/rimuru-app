import NodeCache from 'node-cache';

// In-memory cache for scraped data and other transient storage.
// stdTTL 0 means no expiration; you can adjust as needed.

const globalForCache = global as unknown as { nodeCache: NodeCache };

export const cache = globalForCache.nodeCache || new NodeCache({ stdTTL: 0, checkperiod: 0 });

if (process.env.NODE_ENV !== 'production') {
  globalForCache.nodeCache = cache;
}
