import { H2 } from '../h2/H2.jsx'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentContainer = ({ className, children, error }) => {
  return error ? (
    <div className={className}>
      <H2>Ошибка</H2>
      <Div>{error}</Div>
    </div>
  ) : (
    <>{children}</>
  )
}

export const Content = styled(ContentContainer)``
