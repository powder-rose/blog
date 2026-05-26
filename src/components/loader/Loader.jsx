import { styled, keyframes } from 'styled-components'

const Header = styled.div`
  margin-bottom: 12px;
`
const LoadingText = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  overflow: hidden;
`
const StarWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  padding-right: 15px;

  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const StarLoader = styled.div`
  width: 55px;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  line-height: 1;
  color: #fcd684;

  animation: ${spin} 2s linear infinite;

  transform-origin: center center;
`

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingText>Загрузка...</LoadingText>
      <StarWrapper>
        <StarLoader>★</StarLoader>
      </StarWrapper>
    </LoaderContainer>
  )
}
