import { db } from './db';

export async function getURLfromId(id: string) {
	const urlDB = await db.links.findUnique({
		where: {
			id
		}
	});
	if (!urlDB) return;
	return urlDB.link;
}
