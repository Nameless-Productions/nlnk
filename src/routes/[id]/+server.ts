import { getURLfromId } from '$lib/getURLfromId';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const url = await getURLfromId(params.id);

	if (!url) return error(404);

	redirect(303, url);
};
