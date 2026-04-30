import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import {
  userReducer,
  usersReducer,
  postReducer,
  postsReducer,
} from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer,
})
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)
