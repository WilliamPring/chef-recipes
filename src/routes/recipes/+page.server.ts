import * as db from '$lib/server/database';
import * as recipe from '$lib/server/db/recipe';

import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ locals, parent }) => {
  const { user } = await parent()
  console.log(user.id)
  return {
    data: await recipe.getRecipesByUser({locals, userId: user.id})
  };
}) satisfies PageServerLoad;




export const actions = {
  create: async ({ request, locals }) => {
    const data = await request.formData();
    const name = data.get('name');
    const description = data.get('description');
    const url = data.get('url');
    console.log(name, description, url)
    const resp = await db.createRecipe({ locals, name, description, url })
    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  }
} satisfies Actions;