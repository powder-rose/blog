export const removePostAsync = (requestServer, id) => () => {
  return requestServer('removePost', id)
}
