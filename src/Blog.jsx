import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Post, Authorization, Registaration, Users, Main } from './pages'
import { useLayoutEffect } from 'react'
import { setUser } from './actions'
import { useDispatch } from 'react-redux'
import { Modal } from './components'

const Page = styled.div`
  padding: 187px 0;
`

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function Blog() {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData')
    if (!currentUserDataJSON) {
      return
    }

    const currentUserData = JSON.parse(currentUserDataJSON)

    dispatch(
      setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) })
    )
  }, [dispatch])

  return (
    <AppContent>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Authorization />}></Route>
          <Route path="/register" element={<Registaration />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/post/:id/edit" element={<Post />}></Route>
          <Route path="/post/:id/*" element={<div>Ошибка</div>}></Route>
          <Route path="/*" element={<div>Ошибка</div>}></Route>
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppContent>
  )
}

export default Blog
