import { db } from './db';

export async function getURLfromId(id: string) {
	const urlDB = await db.orm.public.Links.where((l) => l.id.eq(id)).first();
	if (!urlDB) return;
	return urlDB.link;
}
