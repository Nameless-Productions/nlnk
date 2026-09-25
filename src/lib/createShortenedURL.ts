import { randomBytes } from 'crypto';
import { db } from './db';

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export async function createShortenedURL(url: string) {
	const urlDB = await db.orm.public.Links.where((l) => l.link.eq(url)).all();
	if (urlDB.length !== 0) return urlDB[0].id;

	const bytes = randomBytes(5);
	const id = Array.from(bytes)
		.map((b) => alphabet[b % alphabet.length])
		.join('');

	await db.orm.public.Links.create({
		id,
		link: url
	});

	return id;
}
