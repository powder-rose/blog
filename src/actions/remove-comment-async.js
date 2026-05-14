import { setPostData } from './set-post-data.js'

export const removeCommentAsync = (requestServer, id, postId) => (dispatch) => {
  requestServer('removePostComment', postId, id).then((postData) => {
    dispatch(setPostData(postData.response))
  })
}
