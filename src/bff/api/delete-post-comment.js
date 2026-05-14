export const deletePostComment = async (commentId) => {
  await fetch(`http://localhost:3005/comments/${commentId}`, {
    method: 'DELETE',
  })
}
