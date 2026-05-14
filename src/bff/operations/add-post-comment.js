import { addComment, getComments, getPost, getSession } from '../api'
import { ROLE } from '../../constants'
import { sessions } from '../sessions'

export const addPostComment = async (hash, postId, userId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.READER, ROLE.MODERATOR]

  const access = await sessions.access(hash, accessRoles)

  if (!access) {
    return {
      error: 'Вы не авторизованы',
      response: null,
    }
  }

  await addComment(userId, content, postId)

  const post = await getPost(postId)
  const comments = await getComments(postId)

  return {
    error: null,
    response: { ...post, comments },
  }
}
