import { connectToDB } from '$lib/database';
import type { Handle } from '@sveltejs/kit';


export const handle = (async ({ event, resolve }) => {
    event.locals = { pool: connectToDB.promise() };
    const response = await resolve(event);
    return response;
  }) satisfies Handle;