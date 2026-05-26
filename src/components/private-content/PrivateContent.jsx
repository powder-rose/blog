import { Error } from '../error/Error.jsx'
import { Loader } from '../loader/Loader.jsx'
import { useSelector } from 'react-redux'
import { selectUserRole } from '../../selectors'
import { ERROR } from '../../constants'
import { checkAccess } from '../../utils'

export const PrivateContent = ({
  children,
  access,
  serverError = null,
  isLoading,
}) => {
  const userRole = useSelector(selectUserRole)

  if (isLoading) {
    return <Loader />
  }

  const accessError =
    access && !checkAccess(access, userRole) ? ERROR.ACCESS_DENIED : null

  const error = serverError || accessError
  return error ? <Error error={error} /> : children
}
