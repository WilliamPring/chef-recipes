import { connectToDB, prismaClient } from '$lib/database';
import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const dbPoolHandler = (async ({ event, resolve }) => {
    event.locals = { pool: connectToDB.promise(), prismaClient, userData: { name: "", email: "", id: 0 } };
    const response = await resolve(event);
    return response;
  }) satisfies Handle;

export const githubHandle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
})


export const handle = sequence(dbPoolHandler, githubHandle);