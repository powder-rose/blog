import styled from 'styled-components'
import { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Comments, PostContent, PostForm } from './components'
import { useMatch, useParams } from 'react-router-dom'
import { useServerRequest } from '../../hooks'
import { loadPostAsync, RESET_POST_DATA } from '../../actions'
import { selectPost } from '../../selectors'

const PostContainer = ({ className }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const isEditing = useMatch('/post/:id/edit')
  const isCreating = useMatch('/post')
  const requestServer = useServerRequest()
  const post = useSelector(selectPost)

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA)
  }, [dispatch, isCreating])

  useEffect(() => {
    if (isCreating) {
      return
    }

    dispatch(loadPostAsync(requestServer, params.id))
  }, [dispatch, params.id, requestServer, isCreating])

  return (
    <div className={className}>
      {isCreating || isEditing ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments postId={post.id} comments={post.comments} />
        </>
      )}
    </div>
  )
}

export const Post = styled(PostContainer)`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`
