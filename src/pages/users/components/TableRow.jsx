import styled from 'styled-components'

const TableRowContainer = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

export const TableRow = styled(TableRowContainer)`
  display: flex;
  margin-bottom: 2rem;
  & > div {
    padding: 10px;
  }
`
