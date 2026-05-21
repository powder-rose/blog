import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useServerRequest } from '../../hooks'
import { PostCard } from './components'
import { Pagination } from './components'
import { PAGINATION_LIMIT } from '../../constants'

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const requestServer = useServerRequest()

  useEffect(() => {
    requestServer('fetchPosts', page, PAGINATION_LIMIT).then((posts, links) => {
      setPosts(posts.response)
      setLastPage(2)
    })
  }, [requestServer, page])

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
      {lastPage > 1 && (
        <Pagination setPage={setPage} page={page} lastPage={lastPage} />
      )}
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
