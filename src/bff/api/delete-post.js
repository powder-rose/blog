export const deletePost = async (id) => {
  await fetch(`http://localhost:3005/posts/${id}`, {
    method: 'DELETE',
  })
}
