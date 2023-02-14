import { Recipe, RecipeDto } from '$lib/interface';



export async function getRecipesByUser({ locals, user_email }): Promise<RecipeDto[]> {
    const { prismaClient } = locals;
  
  
    const data: Array<Recipe> = await prismaClient.Recipe.findMany({
      where: {
        user_email,
      }
    })
    console.log("data", data)
    return data
  };