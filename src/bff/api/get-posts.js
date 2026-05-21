import { transformPost } from '../transformers'

export const getPosts = async (page, limit) => {
  const url = `http://localhost:3005/posts?_page=${page}&_limit=${limit}`

  const response = await fetch(url)

  const posts = await response.json()
  const links = response.headers.get('Link')

  return {
    posts: posts.map(transformPost),
    links,
  }
}
