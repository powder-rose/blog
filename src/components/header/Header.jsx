import styled from 'styled-components'
import { ControlPanel, Logo } from './components'

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <ControlPanel />
  </header>
)

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  height: 187px;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 15px 10px;
  background-color: #e9cfff;
`
