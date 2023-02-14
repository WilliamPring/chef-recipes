import type { LayoutServerLoad } from "./$types"
import * as user from '$lib/server/db/user';



export const load: LayoutServerLoad = async (event) => {
  const { upsertUser, session } = await user.createupdateUserIfNotExist({locals: event.locals})
  return {
    session: session,
    user: upsertUser
  }
}
