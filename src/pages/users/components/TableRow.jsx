import styled from 'styled-components'
import PropTypes from 'prop-types'

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
TableRow.propTypes = {
  children: PropTypes.node.isRequired,
}
