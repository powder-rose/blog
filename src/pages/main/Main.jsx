import styled from 'styled-components'
import { useEffect, useState, useMemo } from 'react'
import { useServerRequest } from '../../hooks'
import { PostCard, Search } from './components'
import { Pagination } from './components'
import { PAGINATION_LIMIT } from '../../constants'
import { getLastPageFromLinks, debounce } from './utils'

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [shouldSearch, setShouldSearch] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState('')
  const [lastPage, setLastPage] = useState(1)
  const requestServer = useServerRequest()

  useEffect(() => {
    requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
      ({ response, links }) => {
        setPosts(response)

        const last = getLastPageFromLinks(links)

        setLastPage(last)
      }
    )
  }, [requestServer, page, shouldSearch])

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), [])

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value)
    startDelayedSearch(!shouldSearch)
  }

  return (
    <div className={className}>
      <div>
        <Search searchPhrase={searchPhrase} onChange={onSearch} />

        <div className="post-wrapper">
          {posts.length > 0 ? (
            <div className="post-list">
              {posts.map(
                ({ id, title, publishedAt, commentsCount, imageUrl }) => (
                  <PostCard
                    key={id}
                    id={id}
                    title={title}
                    publishedAt={publishedAt}
                    commentsCount={commentsCount}
                    imageUrl={imageUrl}
                  />
                )
              )}
            </div>
          ) : (
            <div className="no-post-found">Статья не найдена</div>
          )}
        </div>
      </div>
      {lastPage > 1 && posts.length > 0 && (
        <Pagination setPage={setPage} page={page} lastPage={lastPage} />
      )}
    </div>
  )
}

export const Main = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  position: relative;

  & .post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 30px;
  }

  & .no-post-found {
    margin-left: 10px;
    align-self: flex-start;
    justify-self: flex-start;
    width: 30%;
    padding: 30px;
    background-color: #ffbebf;
    border-radius: 15px;
  }

  & .post-wrapper {
    display: flex;
    justify-content: flex-start;
    min-height: 30vh;
    margin-bottom: 60px;
    margin-left: 100px;
  }
`
