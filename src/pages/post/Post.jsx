import styled from 'styled-components'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Comments, PostContent, PostForm } from './components'
import { useMatch, useParams } from 'react-router-dom'
import { useServerRequest } from '../../hooks'
import { loadPostAsync, RESET_POST_DATA } from '../../actions'
import { selectPost } from '../../selectors'
import { Error, Loader, PrivateContent } from '../../components'
import { ROLE } from '../../constants/index.js'

const PostContainer = ({ className }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const isEditing = !!useMatch('/post/:id/edit')
  const isCreating = !!useMatch('/post')
  const [isLoading, setIsLoading] = useState(true)
  const requestServer = useServerRequest()
  const post = useSelector(selectPost)

  const [error, setError] = useState(null)

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA)
  }, [dispatch, isCreating])

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    dispatch(loadPostAsync(requestServer, params.id))
      .then((postData) => {
        if (postData.error) {
          setError(postData.error)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [dispatch, params.id, requestServer, isCreating])

  if (isLoading) {
    return <Loader />
  }

  const SpecificPostPage =
    !!isCreating || !!isEditing ? (
      <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
        <div className={className}>
          <PostForm post={post} />
        </div>
      </PrivateContent>
    ) : (
      <div className={className}>
        <PostContent post={post} />
        <Comments postId={post.id} comments={post.comments} />
      </div>
    )
  return error ? <Error error={error} /> : SpecificPostPage
}

export const Post = styled(PostContainer)`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`
