import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Authorization } from './pages'
import { Registaration } from './pages/registration/Registration.jsx'

const Content = styled.div`
  padding: 187px 0;
`

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

function Blog() {
  return (
    <AppContent>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная</div>}></Route>
          <Route path="/login" element={<Authorization />}></Route>
          <Route path="/register" element={<Registaration />}></Route>
          <Route path="/users" element={<div>Пользователи</div>}></Route>
          <Route path="/post/:post_id" element={<div>Статья</div>}></Route>
          <Route path="/post" element={<div>Новая Статья</div>}></Route>
          <Route path="/*" element={<div>Ошибка</div>}></Route>
        </Routes>
      </Content>
      <Footer />
    </AppContent>
  )
}

export default Blog
