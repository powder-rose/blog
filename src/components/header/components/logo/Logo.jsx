import { Link } from 'react-router-dom'
import logo from './logo.svg'
import styled from 'styled-components'

const LargeText = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const MediumText = styled.div`
  font-size: 20px;
  line-height: 2rem;
  margin-left: 1rem;
`

const Icon = styled.img`
  width: 126px;
  height: 131px;
  margin: 10px;
`

const LogoContainer = ({ className }) => {
  return (
    <Link className={className} to="/">
      <Icon src={logo} alt="logo" />
      <div>
        <LargeText>Блог о</LargeText>
        <MediumText>{`< веб-разработке />`}</MediumText>
      </div>
    </Link>
  )
}

export const Logo = styled(LogoContainer)`
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
`
