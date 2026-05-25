import styled from 'styled-components'
import { Icon, Input } from '../../../components'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input
        value={searchPhrase}
        placeholder="Поиск по заголовкам..."
        width="400px"
        background="#fff"
        border="1px solid black"
        onChange={onChange}
      />
      <Icon className="search-icon" size={20} id={faMagnifyingGlass} />
    </div>
  )
}

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  margin: 30px 0 30px 100px;
  padding: 10px;

  & > input {
    padding: 10px 40px 10px 10px;
    font-size: 16px;
  }

  & .search-icon {
    position: absolute;
    left: 370px;
  }
`
