import { ACTION_TYPE } from '../actions/index.js'

export const initialPostState = {
  id: '',
  title: '',
  imageUrl: '',
  content: '',
  publishedAt: '',
  comments: [],
}

export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return {
        ...state,
        ...action.payload,
        comments: Array.isArray(action.payload.comments)
          ? action.payload.comments
          : state.comments,
      }

    case ACTION_TYPE.RESET_POST_DATA:
      return initialPostState

    default:
      return state
  }
}
