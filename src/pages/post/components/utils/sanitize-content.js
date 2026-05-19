export const sanitizeContent = (content) => {
  return content
    .replace(/ +/, ' ')
    .replaceAll('br&gt;', ' ')
    .replaceAll('&nbsp;', '')
    .replaceAll('<div><br></div>', '\n')
    .replaceAll('<div>', '\n')
    .replaceAll('</div>', '')
    .replaceAll('<br>', '\n')
}
