import { generateDate } from '../utils/index.js'

export const addPost = async ({ imageUrl, title, content }) => {
  const response = await fetch('http://localhost:3005/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_url: imageUrl,
      published_at: generateDate(),
      title,
      content,
    }),
  })

  return response.json()
}
