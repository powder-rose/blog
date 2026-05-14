import { setPostData } from './set-post-data.js'

export const addCommentAsync =
  (requestServer, userId, postId, content) => async (dispatch) => {
    requestServer('addPostComment', postId, userId, content).then(
      (postData) => {
        dispatch(setPostData(postData.response))
      }
    )
  }
