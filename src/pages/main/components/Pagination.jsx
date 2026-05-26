import styled from 'styled-components'
import { OvalButton } from '../../../components/button/OvalButton.jsx'
import PropTypes from 'prop-types'

const PaginationContainer = ({ className, setPage, page, lastPage }) => {
  return (
    <div className={className}>
      <OvalButton
        width="160"
        disabled={page === 1}
        className="page-button"
        onClick={() => setPage(1)}
      >
        В начало
      </OvalButton>
      <OvalButton
        width="160"
        disabled={page === 1}
        className="page-button"
        onClick={() => setPage(page - 1)}
      >
        Предыдущая
      </OvalButton>
      <div className="current-page">Страница: {page}</div>
      <OvalButton
        width="160"
        disabled={page === lastPage}
        className="page-button"
        onClick={() => setPage(page + 1)}
      >
        Следующая
      </OvalButton>
      <OvalButton
        width="160"
        disabled={page === lastPage}
        className="page-button"
        onClick={() => setPage(lastPage)}
      >
        В конец
      </OvalButton>
    </div>
  )
}

export const Pagination = styled(PaginationContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: absolute;
  padding-top: 30px;
  bottom: 20px;

  & .page-button {
    background-color: rgba(75, 0, 130, 0.42);
    margin: 10px;

    &:disabled {
      cursor: default;
      background-color: rgba(105, 105, 105, 0.6);
      color: black;

      &:hover {
        background-color: rgba(105, 105, 105, 0.6);
      }
    }

    &:hover {
      background-color: rgba(195, 115, 255, 0.68);
    }
  }
`

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  lastPage: PropTypes.number.isRequired,
}
