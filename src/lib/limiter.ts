import { RateLimiter } from 'sveltekit-rate-limiter/server';

export const limiter = new RateLimiter({
	IP: [10, 'm']
});
