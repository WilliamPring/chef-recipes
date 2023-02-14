export async function getRecipesByUser({ locals, userId }) {
    const { prismaClient } = locals;
  
  
    const data = await prismaClient.Recipe.findMany({
      where: {
        user_parent_id: userId,
      }
    })
  
    return { userRecipe: data }
  };