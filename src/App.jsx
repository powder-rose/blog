
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLemon} from '@fortawesome/free-solid-svg-icons'

const Div = styled.div`
text-align: center;`

function App() {

  return (
      <>
      <Div>
        <FontAwesomeIcon icon={faLemon} />
      </Div>
      </>
  )
}

export default App
