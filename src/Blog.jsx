import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Authorization, Registaration, Users } from './pages'

const Page = styled.div`
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
      <Page>
        <Routes>
          <Route path="/" element={<div>Главная</div>}></Route>
          <Route path="/login" element={<Authorization />}></Route>
          <Route path="/register" element={<Registaration />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/post/:post_id" element={<div>Статья</div>}></Route>
          <Route path="/post" element={<div>Новая Статья</div>}></Route>
          <Route path="/*" element={<div>Ошибка</div>}></Route>
        </Routes>
      </Page>
      <Footer />
    </AppContent>
  )
}

export default Blog
