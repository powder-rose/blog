import styled from 'styled-components'
import { OvalButton } from '../../../components/button/OvalButton.jsx'

const PaginationContainer = ({ className, setPage, page }) => {
  return (
    <div className={className}>
      <OvalButton className="page-button" onClick={() => setPage(1)}>
        В начало
      </OvalButton>
      <OvalButton className="page-button" onClick={() => setPage(page - 1)}>
        Предыдущая
      </OvalButton>
      <div className="current-page">Страница: {page}</div>
      <OvalButton className="page-button" onClick={() => setPage(page + 1)}>
        Следующая
      </OvalButton>
      <OvalButton className="page-button" onClick={() => setPage(1)}>
        В конец
      </OvalButton>
    </div>
  )
}

export const Pagination = styled(PaginationContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  gap: 15px;

  & .page-button {
    background-color: rgba(75, 0, 130, 0.42);
    margin: 10px;
  }
`
