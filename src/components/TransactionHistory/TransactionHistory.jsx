import PropTypes from 'prop-types';
import {
  Table,
  TableHeading,
  TableData,
  TableBody,
  TableHead,
  TableRowHead,
  TableRowBody,
} from './TransactionHistory.styled';

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </TableRowHead>
      </TableHead>
      {items.map(item => (
        <TableBody key={item.id}>
          <TableRowBody>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRowBody>
        </TableBody>
      ))}
    </Table>
  );
}
