import { setPostData } from './set-post-data.js'

export const loadPostAsync = (requestServer, postId) => async (dispatch) => {
  const postData = await requestServer('fetchPost', postId)

  if (postData.response) {
    dispatch(setPostData(postData.response))
  }

  return postData
}
