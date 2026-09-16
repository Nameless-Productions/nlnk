import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createShortenedURL } from '$lib/createShortenedURL';

function isValidURL(url: string): boolean {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData();

		const url = formData.get('url') as string | undefined;
		if (!url) return fail(400, { error: 'No URL' });

		if (!isValidURL(url)) return fail(400, { error: 'Invalid URL' });

		const id = await createShortenedURL(url);

		return { id };
	}
};
