import { setUserRole } from '../api'
import { ROLE } from '../constants'
import { sessions } from '../sessions.js'

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
  const accessRoles = [ROLE.ADMIN]

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: 'Доступ запрещен',
      response: null,
    }
  }
  await setUserRole(userId, newUserRoleId)

  return {
    error: null,
    response: true,
  }
}
