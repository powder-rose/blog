import styled from 'styled-components'
import { H2 } from '../h2/H2.jsx'
import PropTypes from 'prop-types'
import { PROP_TYPE } from '../../constants/index.js'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`

export const Error = ({ error }) => {
  return (
    error && (
      <Div>
        <H2>Ошибка</H2>
        <div>{error}</div>
      </Div>
    )
  )
}

Error.propTypes = {
  error: PROP_TYPE.ERROR,
}
