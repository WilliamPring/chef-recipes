import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';
 
export const load = (async ({ locals }) => {
  return {
    post: await db.getPost({locals})
  };
}) satisfies PageServerLoad;