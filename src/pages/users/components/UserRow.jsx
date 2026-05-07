import styled from 'styled-components'
import { faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons'
import { RoundButton } from '../../../components'
import { Icon } from '../../../components'
import { useState } from 'react'
import { useServerRequest } from '../../../hooks'

const UserRowContainer = ({
  id,
  login,
  registeredAt,
  className,
  roleId: userRoleId,
  roles,
  onUserRemove,
}) => {
  const [initialRoleId, setInitialRoleId] = useState(userRoleId)
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)
  const requestServer = useServerRequest()

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value))
  }
  const onRoleSave = (userId, newUserRoleId) => {
    requestServer('updateUserRole', userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId)
    })
  }

  const isSaveButtonDisabled = selectedRoleId === initialRoleId

  return (
    <div className={className}>
      <div className="user-data">
        <div className="login-column">{login}</div>
      </div>
      <div className="registered-at-column">{registeredAt}</div>
      <div className="role-column">
        <select
          className="select"
          value={selectedRoleId}
          onChange={onRoleChange}
        >
          {roles.map(({ id: roleId, name: roleName }) => (
            <option key={roleId} value={roleId}>
              {roleName}
            </option>
          ))}
        </select>
      </div>
      <div className="wrapper-buttons">
        <RoundButton
          disabled={isSaveButtonDisabled}
          onClick={() => onRoleSave(id, selectedRoleId)}
        >
          <Icon size={20} id={faFloppyDisk} />
        </RoundButton>
        <RoundButton onClick={onUserRemove}>
          <Icon size={20} id={faTrash} />
        </RoundButton>
      </div>
    </div>
  )
}

export const UserRow = styled(UserRowContainer)`
  display: flex;
  align-items: center;
  background-color: #f3e4ff;
  margin-bottom: 20px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

  & .select {
    width: 160px;
    padding: 10px;
    border-radius: 15px;
  }

  & .wrapper-buttons {
    display: flex;
    gap: 10px;
  }
`
