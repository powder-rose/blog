export const getLastPageFromLinks = (links) => {
  const result = links?.match(/_page=(\d+)&_limit=\d+>; rel="last"/)
  return Number(result[1])
}
