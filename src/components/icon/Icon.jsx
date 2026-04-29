import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconContainer = ({ className, id, size }) => {
  return <FontAwesomeIcon size={size} className={className} icon={id} />
}

export const Icon = styled(IconContainer)`
  font-size: ${({ size }) => size}px;
`
