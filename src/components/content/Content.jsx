import { H2 } from '../h2/H2.jsx'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = ({ children, error }) => {
  return error ? (
    <>
      <H2>Ошибка</H2>
      <Div>{error}</Div>
    </>
  ) : (
    <>{children}</>
  )
}
