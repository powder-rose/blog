import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { OvalButton } from '../../components/button/OvalButton.jsx'
import { server } from '../../bff'
import { useState } from 'react'
import styled from 'styled-components'
import { Input, H2 } from '../../components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSession } from '../../actions'

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Неверно заполнен логин. Допускаются только буквы и цифры'
    )
    .min(3, 'Неверно заполнен логин. Минимальное количество символов - 3')
    .max(15, 'Неверно заполнен логин. Максимальное количество символов - 15'),
  password: yup
    .string()
    .required('Заполните пароль')
    .matches(
      /^[\w#%]+$/,
      'Неверно заполнен пароль. Допускаются буквы, цифры и знаки % #'
    )
    .min(6, 'Неверно заполнен пароль. Минимальное количество символов - 6')
    .max(30, 'Неверно заполнен пароль. Максимальное количество символов - 30'),
})

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffbebf;
  width: 312px;
  height: 80px;
  border-radius: 15px;
  padding: 10px;
`

const AuthorizationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  })

  const [serverError, setServerError] = useState(null)

  const dispatch = useDispatch()

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`)
        return
      }
      dispatch(setSession(response))
    })
  }

  const formError = errors?.login?.message || errors?.password?.message

  const errorMessage = serverError || formError

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          {...register('login', {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register('password', {
            onChange: () => setServerError(null),
          })}
        />

        <OvalButton
          disabled={!!formError}
          type="submit"
          background="#df9cff"
          backgroundhover="#df9cf0"
          width="312"
          height="36"
        >
          Авторизоваться
        </OvalButton>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Link to="/register">
          <OvalButton
            background="#df9cff"
            backgroundhover="#df9cf0"
            width="312"
            height="36"
          >
            Регистрация
          </OvalButton>
        </Link>
      </form>
    </div>
  )
}

export const Authorization = styled(AuthorizationContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    gap: 1.3rem;
    display: flex;
    flex-direction: column;
    width: 312px;
    align-items: center;
    margin: 1rem;
  }
`
