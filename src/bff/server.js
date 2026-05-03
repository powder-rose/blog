import { getUser } from './get-user.js'
import { createUser } from './create-user.js'
import { sessions } from './sessions.js'

export const server = {
  async logout(session) {
    sessions.remove(session)
  },

  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin)

    if (!user) {
      return {
        error: 'Пользователь не найден',
        response: null,
      }
    }

    if (authPassword !== user.password) {
      return {
        error: 'Неверный пароль',
        response: null,
      }
    }

    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  },

  async register(regLogin, regPassword) {
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
  },
}
