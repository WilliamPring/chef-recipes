import * as db from '$lib/server/database';
import type { PageServerLoad, Actions } from './$types';
 
export const load = (async ({ locals }) => {
  return {
    post: await db.getPost({locals}),
  };
}) satisfies PageServerLoad;




export const actions = {
  create: async ({ request, locals }) => {
    const data = await request.formData();
    const name = data.get('name');
    const description = data.get('description');
    const url = data.get('url');
    console.log(name, description, url)
    const resp = await db.createRecipe({locals, name, description, url})
    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  }
} satisfies Actions;