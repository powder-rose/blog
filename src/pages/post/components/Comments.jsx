import styled from 'styled-components'
import { Icon, RoundButton } from '../../../components'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import { Comment } from './comment'
import { useDispatch, useSelector } from 'react-redux'
import { SelectUserId, selectUserRole } from '../../../selectors'
import { useServerRequest } from '../../../hooks'
import { addCommentAsync } from '../../../actions'
import { PROP_TYPE, ROLE } from '../../../constants'
import PropTypes from 'prop-types'

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch()
  const userId = useSelector(SelectUserId)
  const requestServer = useServerRequest()
  const roleId = useSelector(selectUserRole)
  const isGuest = roleId === ROLE.GUEST

  const onNewCommentAdd = async (postId, userId, content) => {
    await dispatch(addCommentAsync(requestServer, postId, userId, content))

    setNewComment('')
  }

  return (
    <div className={className}>
      <h2 className="header-comments">Комментарии</h2>

      {!isGuest && (
        <>
          <div className="comment-content">
            <textarea
              name="comment"
              value={newComment}
              placeholder="Поделитесь мнением..."
              className="textarea"
              onChange={({ target }) => {
                setNewComment(target.value)
              }}
            />

            <RoundButton
              className="comment-button"
              onClick={() => onNewCommentAdd(postId, userId, newComment)}
            >
              <Icon className="comment-icon" size={20} id={faPaperPlane} />
            </RoundButton>
          </div>
        </>
      )}

      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment
            key={id}
            postId={postId}
            id={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </div>
    </div>
  )
}

export const Comments = styled(CommentsContainer)`
  width: 100%;
  margin-left: 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  & .header-comments {
    margin-bottom: 1rem;
  }

  & .textarea {
    box-sizing: border-box;
    width: 500px;
    height: 150px;
    border-radius: 15px;
    border: none;
    padding: 15px;
    background-color: #f3e4ff;
    resize: none;
  }

  & .comment-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & .comment-button {
    border: 1px solid #000;
  }

  & .comment-icon {
    position: relative;
    z-index: 0;
    top: 1px;
    right: 1px;
  }

  & .comments {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 50%;
    overflow-wrap: break-word;
    word-break: break-word;
  }
`
Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
}
