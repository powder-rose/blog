import styled from 'styled-components'
import PropTypes from 'prop-types'

const OvalButtonContainer = ({ className, children, width, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export const OvalButton = styled(OvalButtonContainer)`
  background-color: ${({ background }) => background || '#fff'};
  overflow: hidden;
  height: ${({ height }) => height || 23}px;
  width: ${({ width }) => width || 361}px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: ${({ margin }) => margin || 0}px;
  padding: ${({ padding }) => padding || 0}px;
  &:hover {
    background-color: ${({ backgroundhover }) => backgroundhover};
  }
`
OvalButton.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
}
