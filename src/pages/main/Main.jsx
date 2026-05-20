import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useServerRequest } from '../../hooks'
import { PostCard } from './components/index.js'

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([])
  const requestServer = useServerRequest()

  useEffect(() => {
    requestServer('fetchPosts').then((posts) => {
      setPosts(posts.response)
    })
  }, [requestServer])

  return (
    <div className={className}>
      <div className="search"></div>
      <div className="post-list">
        {posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
            publishedAt={publishedAt}
            commentsCount={commentsCount}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export const Main = styled(MainContainer)`
  & .post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
  }
`
