import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
const Content = styled.div`
  padding: 187px 0;
`

const H2 = styled.h2`
  text-align: center;
`

const Header = () => <div>Шапка сайта</div>
const Footer = () => <div>Подвал</div>
function Blog() {
  return (
    <>
      <Header />
      <Content>
        <H2>Контент страницы</H2>
        <Routes>
          <Route path="/" element={<div>Главная</div>}></Route>
          <Route path="/login" element={<div>Авторизация</div>}></Route>
          <Route path="/register" element={<div>Регистрация</div>}></Route>
          <Route path="/users" element={<div>Пользователи</div>}></Route>
          <Route path="/post/:post_id" element={<div>Статья</div>}></Route>
          <Route path="/post" element={<div>Новая Статья</div>}></Route>
          <Route path="/*" element={<div>Ошибка</div>}></Route>
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default Blog
