import { transformPost } from '../transformers'

export const getPosts = async (searchPhrase, page, limit) => {
  const url = `http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`

  const response = await fetch(url)
  const posts = await response.json()
  const links = response.headers.get('Link')

  return {
    posts: posts.map(transformPost),
    links,
  }
}
