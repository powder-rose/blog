import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Comments, PostContent, PostForm } from './components'
import { useMatch, useParams } from 'react-router-dom'
import { useServerRequest } from '../../hooks'
import { loadPostAsync } from '../../actions'
import { selectPost } from '../../selectors'

const PostContainer = ({ className }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const isEditing = useMatch('/post/:id/edit')

  const requestServer = useServerRequest()
  const post = useSelector(selectPost)
  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id))
  }, [dispatch, params.id, requestServer])

  return (
    <div className={className}>
      {isEditing ? (
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
