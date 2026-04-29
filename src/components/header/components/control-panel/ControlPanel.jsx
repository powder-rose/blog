import styled from 'styled-components'
import { RoundButton } from '../button/RoundButton.jsx'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { Icon } from '../../../icon/Icon.jsx'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { OvalButton } from '../button/OvalButton.jsx'
import { Link, useNavigate } from 'react-router-dom'
const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 10px;
`

const RightAlignedColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 10px;
`

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate()

  return (
    <div className={className}>
      <RightAligned>
        <Link to="/post">
          <RoundButton title="Новая статья">
            <Icon size={24} id={faFileLines} />
          </RoundButton>
        </Link>
        <Link to="/users">
          <RoundButton>
            <Icon size={23} id={faUserGroup} />
          </RoundButton>
        </Link>
      </RightAligned>
      <RightAlignedColumn>
        <Link to="/login">
          <OvalButton backgroundhover="#d985ff" background="#e09cff">
            Войти
          </OvalButton>
        </Link>
        <OvalButton onClick={() => navigate(-1)}>Назад</OvalButton>
      </RightAlignedColumn>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)``
