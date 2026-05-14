import { ROLE } from '../constants'
import { sessions } from '../sessions.js'
import { deletePostComment, getComments, getPost } from '../api'

export const removePostComment = async (hash, id, postId) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR]

  const access = await sessions.access(hash, accessRoles)

  if (!access) {
    return {
      error: 'Доступ запрещен',
      response: null,
    }
  }

  await deletePostComment(id)

  const post = await getPost(postId)
  const comments = await getComments(postId)

  return {
    error: null,
    response: {
      ...post,
      comments,
    },
  }
}
