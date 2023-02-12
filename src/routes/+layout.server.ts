import type { LayoutServerLoad } from "./$types"
import * as user from '$lib/server/db/user';



export const load: LayoutServerLoad = async (event) => {
  const data = await event.locals.getSession()
  const { upsertUser, session } = await user.createupdateUserIfNotExist({locals: event.locals})
  console.log(upsertUser)
  return {
    session: session,
    user: upsertUser
  }
}
