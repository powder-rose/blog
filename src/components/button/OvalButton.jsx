import styled from 'styled-components'

const OvalButtonContainer = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export const OvalButton = styled(OvalButtonContainer)`
  background-color: ${({ background }) => background || '#fff'};
  height: ${({ height }) => height || 23}px;
  width: ${({ width }) => width || 130}px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: ${({ margin }) => margin || 3}px;
  &:hover {
    background-color: ${({ backgroundhover }) => backgroundhover};
  }
`
