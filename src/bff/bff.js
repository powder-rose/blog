import { getUser } from './get-user.js'
import { createUser } from './create-user.js'
import { createSession } from 'create-session.js'

export const server = {
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin)

    if (!user) {
      return {
        error: 'No user found.',
        response: null,
      }
    }

    if (authPassword !== user.password) {
      return {
        error: 'Wrong password',
        response: null,
      }
    }

    return {
      error: null,
      response: createSession(user.role_id),
    }
  },

  async register(regLogin, regPassword) {
    const user = await getUser(regLogin)

    if (user) {
      return {
        error: 'User already exists',
        response: null,
      }
    }

    await createUser(regLogin, regPassword)

    return {
      error: null,
      response: createSession(user.role_id),
    }
  },
}
