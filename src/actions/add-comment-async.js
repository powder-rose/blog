import { setPostData } from './set-post-data.js'

export const addCommentAsync =
  (requestServer, postId, userId, content) => async (dispatch) => {
    const postData = await requestServer(
      'addPostComment',
      postId,
      userId,
      content
    )

    dispatch(setPostData(postData.response))

    return postData.response
  }
