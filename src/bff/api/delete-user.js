export const deleteUser = async (userId) => {
  await fetch(`http://localhost:3005/users/${userId}`, {
    method: 'DELETE',
  })
}
