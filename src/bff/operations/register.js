import { createUser, getUser } from '../api'
import { sessions } from '../sessions.js'

export const register = async (regLogin, regPassword) => {
  const existedUser = await getUser(regLogin)

  if (existedUser) {
    return {
      error: 'Пользователь уже существует',
      response: null,
    }
  }

  const user = await createUser(regLogin, regPassword)
  return {
    error: null,
    response: {
      id: user.id,
      login: user.login,
      roleId: user.roleId,
      session: sessions.create(user),
    },
  }
}
