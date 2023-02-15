import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';
import * as recipeInstruction from '$lib/server/db/recipeInstruction';

export const load = (async ({ locals, params }) => {
  const recipeID: number = parseInt(params.slug);
  return {
    recipe: await recipeInstruction.getRecipesInstruction({ locals, id: recipeID })
  };
}) satisfies PageServerLoad;

// {"1":"Cut the pork into long strips or chunks about 2 to 3 inches thick. Don’t trim any excess fat, as it will render off and add flavor.","2":"Combine the sugar, salt, five spice powder, white pepper, sesame oil, wine, soy sauce, hoisin sauce, molasses, food coloring (if using), and garlic in a bowl to make the marinade (i.e. the BBQ sauce).    ","3":"Reserve about 2 tablespoons of marinade and set it aside. Rub the pork with the rest of the marinade in a large bowl or baking dish. Cover and refrigerate overnight, or at least 8 hours. Cover and store the reserved marinade in the fridge as well.    ","4":"Preheat your oven to 'bake' at 475 F (246 C) with a rack positioned in the upper third of the oven. (If you only have a convection oven, keep in mind the oven not only heats more quickly, your char siu will roast faster than what we have described here).It's amazing how oven temperatures can vary—from model to model, in different spots in the oven, and in how ovens pre-heat and maintain heat.  Using an oven thermometer to double-check the actual oven temperature is a great safeguard to monitor your food (I say double-check because even oven thermostat calibrations vary and can sometimes be incorrect)."}