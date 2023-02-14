
export async function createupdateUserIfNotExist({ locals }) {
    const { prismaClient } = locals;
    const session = await locals.getSession();
    console.log(session)
    if(session === null) {
      return {session, upsertUser: {} }
    }

    
    const upsertUser = await prismaClient.User.upsert({
      where: { email: session?.user.email || "" },
      update: {},
      create: {
        email: session.user.email,
        name: session.user.name
      },
    })
    return {session, upsertUser }
};


