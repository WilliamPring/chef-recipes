
export async function createupdateUserIfNotExist({ locals }) {
    const { prismaClient } = locals;
    const session = await locals.getSession();
    const upsertUser = await prismaClient.User.upsert({
      where: { email: session.user.email || "" },
      update: {},
      create: {
        email: session.user.email,
        name: session.user.name
      },
    })
    
    return {session, upsertUser }
};