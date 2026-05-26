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
import { checkAccess } from '../../../../utils/index.js'

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 10px;
`

const Star = styled.div`
  color: #000000;
  margin-right: 3px;
  margin-bottom: 3px;
  font-size: 20px;
`

const RightAlignedColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 4px;
`
const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

  const isAdmin = checkAccess([ROLE.ADMIN], roleId)

  const onLogout = () => {
    dispatch(logout(session))
    sessionStorage.removeItem('userData')
  }

  return (
    <div className={className}>
      {roleId !== ROLE.GUEST ? (
        <ContainerUser>
          <Star>★</Star>
          <BoldText>{login}</BoldText>
          <IconButton onClick={onLogout}>
            <Icon size={20} id={faArrowRightFromBracket} />
          </IconButton>
        </ContainerUser>
      ) : null}
      <RightAligned>
        {isAdmin && (
          <>
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
          </>
        )}
      </RightAligned>
      <RightAlignedColumn>
        {roleId === ROLE.GUEST ? (
          <Link to="/login">
            <OvalButton
              width="130"
              margin="0 0 13px 0"
              backgroundhover="#d985ff"
              background="#e09cff"
            >
              Войти
            </OvalButton>
          </Link>
        ) : null}

        <OvalButton
          margin="0 0 13px 0"
          width="130"
          backgroundhover="#D7BFFFFF"
          onClick={() => navigate(-1)}
        >
          Назад
        </OvalButton>
      </RightAlignedColumn>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`
