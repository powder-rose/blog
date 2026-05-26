import { setPostData } from './set-post-data.js'

export const savePostAsync =
  (requestServer, newPostData) => async (dispatch) => {
    const updatedPost = await requestServer('savePost', newPostData)

    dispatch(setPostData(updatedPost.response))
    return updatedPost.response
  }
