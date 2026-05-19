import { Icon, RoundButton } from '../../../../components/index.js'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import { useNavigate } from 'react-router-dom'

const SpecialPanelContainer = ({
  className,
  id,
  publishedAt,
  editButton,
  saveButton,
}) => {
  const dispatch = useDispatch()
  const requestServer = useServerRequest()
  const navigate = useNavigate()

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: 'Удалить статью?',
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'))
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
      {publishedAt && <div className="published">{publishedAt}</div>}
      <div className="buttons-container">
        {editButton}
        {saveButton}
        {publishedAt && (
          <RoundButton className="post-button" onClick={() => onPostRemove(id)}>
            <Icon size={20} id={faTrash} />
          </RoundButton>
        )}
      </div>
    </div>
  )
}

export const SpecialPanel = styled(SpecialPanelContainer)`
  min-width: 500px;
  margin: ${({ margin }) => margin};
  display: flex;
  justify-content: ${({ publishedAt }) =>
    publishedAt ? 'space-between' : 'flex-end'};
  padding: 7px;

  & .post-button {
    border: 1px solid #000;
    min-width: 40px;
  }

  .buttons-container {
    display: flex;
  }

  & .published {
    align-self: center;
  }
`
