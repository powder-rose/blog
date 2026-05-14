import { ROLE } from '../constants/index.js'
import { sessions } from '../sessions.js'
import { deleteUser } from '../api'

export const removeUser = async (hash, userId) => {
  const accessRoles = [ROLE.ADMIN]

  const access = await sessions.access(hash, accessRoles)

  if (!access) {
    return {
      error: 'Доступ запрещен',
      response: null,
    }
  }

  await deleteUser(userId)
}
