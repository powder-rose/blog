import styled from 'styled-components'
import { Icon, RoundButton } from '../../../../components'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'

const CommentContainer = ({
  className,
  postId,
  id,
  author,
  content,
  publishedAt,
}) => {
  const dispatch = useDispatch()
  const requestServer = useServerRequest()

  const onCommentRemove = (id) => {
    dispatch(
      openModal({
        text: 'Удалить комментарий?',
        onConfirm: () => {
          dispatch(removeCommentAsync(requestServer, postId, id))
          dispatch(CLOSE_MODAL)
        },

        onCancel: () => {
          dispatch(CLOSE_MODAL)
        },
      })
    )
  }

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="user">
            <Icon size={20} id={faCircleUser} />
            {author}
          </div>
          <div className="published-at">{publishedAt}</div>
        </div>
        <div className="comment-text">{content}</div>
      </div>

      <RoundButton
        onClick={() => {
          onCommentRemove(id)
        }}
        className="trash-button"
      >
        <Icon size={20} id={faTrash} />
      </RoundButton>
    </div>
  )
}

export const Comment = styled(CommentContainer)`
  display: flex;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  & .information-panel {
    display: flex;
    justify-content: space-between;
  }

  & .comment {
    display: flex;
    flex-direction: column;
    background-color: #f3e4ff;
    margin: 1rem;
    padding: 1rem;
    min-width: 394px;
    border-radius: 15px;
    gap: 1rem;
  }

  & .trash-button {
    box-shadow: none;
    min-width: 40px;
  }

  & .published-at {
    font-size: 0.8em;
    color: #989593;
  }

  & .user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
  }
`
