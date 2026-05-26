import { transformPost } from '../transformers'

export const getPost = async (postId) => {
  const response = await fetch(`http://localhost:3005/posts/${postId}`)

  if (!response.ok) {
    throw response.status === 404
      ? 'Такая страница не найдена'
      : 'Что-то пошло не так... Попробуйте повторить позднее'
  }

  const loadedPost = await response.json()

  return loadedPost && transformPost(loadedPost)
}
