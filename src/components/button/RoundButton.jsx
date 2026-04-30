import styled from 'styled-components'

const ButtonContainer = ({ className, children, title }) => (
  <>
    <button title={title} className={className}>
      {children}
    </button>
  </>
)

export const RoundButton = styled(ButtonContainer)`
  width: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 50%;

  &:hover {
    background-color: #f8f3ff;
    cursor: pointer;
  }
`
