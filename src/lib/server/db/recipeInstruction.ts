
export async function getRecipesInstruction({ locals, id }) {
    const { prismaClient } = locals;
      
    const recipeInstruction = await prismaClient.RecipeInstruction.findUnique({
        where: {
            recipe_parent_id :id,
        }
    })
    console.log("data", recipeInstruction)
    return recipeInstruction
};
