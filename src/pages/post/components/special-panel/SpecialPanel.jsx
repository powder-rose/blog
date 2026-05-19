import { Icon, RoundButton } from '../../../../components/index.js'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const SpecialPanelContainer = ({
  className,
  publishedAt,
  editButton,
  saveButton,
}) => {
  return (
    <div className={className}>
      <div className="published">{publishedAt}</div>
      <div className="buttons-container">
        {editButton}
        {saveButton}
        <RoundButton className="post-button">
          <Icon size={20} id={faTrash} />
        </RoundButton>
      </div>
    </div>
  )
}

export const SpecialPanel = styled(SpecialPanelContainer)`
  min-width: 500px;
  margin: ${({ margin }) => margin};
  display: flex;
  justify-content: space-between;
  padding: 7px;

  & .post-button {
    border: 1px solid #000;
    min-width: 40px;
  }

  .buttons-container {
    display: flex;
  }
`
