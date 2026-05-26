import { addComment, getPost } from '../api'
import { ROLE } from '../../constants'
import { sessions } from '../sessions'
import { getPostCommentsWithAuthor } from '../utils/index.js'

export const addPostComment = async (hash, postId, userId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

  const access = await sessions.access(hash, accessRoles)
  if (!access) {
    return {
      error: 'Вы не авторизованы',
      response: null,
    }
  }

  await addComment(userId, postId, content)

  const post = await getPost(postId)
  const commentsWithAuthor = await getPostCommentsWithAuthor(postId)

  return {
    error: null,
    response: { ...post, comments: commentsWithAuthor },
  }
}
