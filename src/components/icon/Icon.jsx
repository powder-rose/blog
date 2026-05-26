import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const IconContainer = ({ className, id, size, color }) => {
  return (
    <FontAwesomeIcon
      color={color}
      size={size}
      className={className}
      icon={id}
    />
  )
}

export const Icon = styled(IconContainer)`
  font-size: ${({ size }) => size}px;
`
Icon.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}
