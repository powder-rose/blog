import styled from 'styled-components'
import { forwardRef } from 'react'

const InputContainer = forwardRef(
  ({ className, width, border, background, ...props }, ref) => {
    return <input className={className} {...props} ref={ref} />
  }
)

export const Input = styled(InputContainer)`
  box-sizing: border-box;
  width: ${({ width = '100%' }) => width};
  height: 36px;
  border: ${({ border = 'none' }) => border};
  outline: none;
  padding: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: ${({ background = '#f3e4ff' }) => background};
`
