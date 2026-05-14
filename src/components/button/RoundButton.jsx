import styled from 'styled-components'

const ButtonContainer = ({ className, children, title, ...props }) => (
  <>
    <button title={title} className={className} {...props}>
      {children}
    </button>
  </>
)

export const RoundButton = styled(ButtonContainer)`
  width: 40px;
  height: 40px;
  margin: 5px;
  background-color: #fff;
  box-shadow: 4px 2px 4px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 50%;

  color: ${({ disabled }) => (disabled ? '#ccc' : '')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#fff' : '#f8f3ff')};
    cursor: pointer;
  }
`
