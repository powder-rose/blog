import { generateDate } from '../utils/index.js'

export const addComment = (userId, postId, content) =>
  fetch(`http://localhost:3005/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      author_id: userId,
      content: content,
      post_id: postId,
      published_at: generateDate(),
    }),
  })
