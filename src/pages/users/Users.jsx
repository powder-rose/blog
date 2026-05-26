import { useServerRequest } from '../../hooks'
import { useEffect, useState } from 'react'
import { H2, Loader, PrivateContent } from '../../components'
import { UserRow, TableRow } from './components'
import styled from 'styled-components'
import { ROLE } from '../../constants/index.js'
import { checkAccess } from '../../utils/index.js'
import { useSelector } from 'react-redux'
import { selectUserRole } from '../../selectors/index.js'

const UsersContainer = ({ className }) => {
  const [roles, setRoles] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false)
  const userRole = useSelector(selectUserRole)
  const requestServer = useServerRequest()

  useEffect(() => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return
    }
    setIsLoading(true)
    Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')])
      .then(([usersRes, rolesRes]) => {
        if (usersRes.error || rolesRes.error) {
          setErrorMessage(usersRes.error || rolesRes.error)
          return
        }

        setUsers(usersRes.response)
        setRoles(rolesRes.response)
      })
      .finally(() => setIsLoading(false))
  }, [requestServer, shouldUpdateUserList, userRole])

  const onUserRemove = (userId) => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return
    }

    requestServer('removeUser', userId).then(() => {
      setShouldUpdateUserList(!shouldUpdateUserList)
    })
  }

  return (
    <div className={className}>
      <PrivateContent
        isLoading={isLoading}
        access={[ROLE.ADMIN]}
        serverError={errorMessage}
      >
        <H2>Пользователи</H2>
        <TableRow>
          <div className="login-column">Логин</div>
          <div className="registered-at-column">Дата регистрации</div>
          <div className="role-column">Роль</div>
        </TableRow>

        {users.map(({ login, registeredAt, id, roleId }) => (
          <UserRow
            id={id}
            key={id}
            login={login}
            registeredAt={registeredAt}
            roleId={roleId}
            roles={roles.filter(
              ({ id: roleId }) => Number(roleId) !== ROLE.GUEST
            )}
            onUserRemove={() => onUserRemove(id)}
          />
        ))}
      </PrivateContent>
    </div>
  )
}
export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
  width: 1000px;
  text-align: center;
  font-weight: bold;

  & .login-column {
    width: 200px;
  }

  & .registered-at-column {
    width: 400px;
  }

  & .role-column {
    width: 300px;
  }
`
