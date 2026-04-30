import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Viget = styled.div`
  background-color: rgba(224, 164, 253, 0.56);
  border-radius: 15px;
  padding: 10px;
`

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState(0)
  const [weatherDesc, setWeatherDesc] = useState('')

  useEffect(() => {
    fetch(
      'https://api.weatherapi.com/v1/current.json?key=59b63805a97e4df2b05171338262904&lang=ru&q=Москва'
    )
      .then((res) => res.json())
      .then(({ location, current }) => {
        setCity(location.name)
        setTemperature(Math.round(current.dewpoint_c))
        setWeatherDesc(current.condition.text)
      })
  }, [])

  return (
    <div className={className}>
      <div>
        <div>Блог о веб-разработке</div>
        <div>web@developer.com</div>
      </div>
      <div>
        <Viget>
          {city}{' '}
          {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
          <div>
            {temperature} °C, {weatherDesc}
          </div>
        </Viget>
      </div>
    </div>
  )
}

export const Footer = styled(FooterContainer)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #bea3d4;
  width: 100%;
  height: 112px;
  padding: 25px;
  font-weight: bold;
  line-height: 21px;
`
