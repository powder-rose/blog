import styled from 'styled-components'
import { RoundButton } from '../../../button/RoundButton.jsx'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { Icon } from '../../../icon/Icon.jsx'
import {
  faArrowRightFromBracket,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { OvalButton } from '../../../button/OvalButton.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { ROLE } from '../../../../constants/index.js'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectUserLogin,
  selectUserRole,
  selectUserSession,
} from '../../../../selectors'
import { logout } from '../../../../actions'

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

const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 7px;
`
const ContainerUser = styled.div`
  display: flex;
  justify-content: end;
  margin: 10px;
`
const BoldText = styled.p`
  font-weight: bold;
`

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const roleId = useSelector(selectUserRole)
  const login = useSelector(selectUserLogin)
  const session = useSelector(selectUserSession)

  return (
    <div className={className}>
      {roleId !== ROLE.GUEST ? (
        <ContainerUser>
          <BoldText>{login}</BoldText>
          <IconButton onClick={() => dispatch(logout(session))}>
            <Icon size={20} id={faArrowRightFromBracket} />
          </IconButton>
        </ContainerUser>
      ) : null}
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
        {roleId === ROLE.GUEST ? (
          <Link to="/login">
            <OvalButton backgroundhover="#d985ff" background="#e09cff">
              Войти
            </OvalButton>
          </Link>
        ) : null}

        <OvalButton onClick={() => navigate(-1)}>Назад</OvalButton>
      </RightAlignedColumn>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`
