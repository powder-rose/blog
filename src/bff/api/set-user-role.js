export const setUserRole = async (userId, roleId) => {
  const response = await fetch(`http://localhost:3005/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      role_id: roleId,
    }),
  })

  return response.json()
}
