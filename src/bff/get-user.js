export const getUser = (loginToFind) => {
  return fetch(`http://localhost:3005/users?login=${loginToFind}`)
    .then((res) => res.json())
    .then((users) => users[0])
}
