import { transformPost } from '../transformers'

export const getPosts = async (page, limit) => {
  const url = `http://localhost:3005/posts?_page=${page}&_limit=${limit}`

  const response = await fetch(url)

  const data = await response.json()

  return data.map(transformPost)
}
