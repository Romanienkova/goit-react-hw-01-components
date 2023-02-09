import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => 
  (
    <table className={css.transactionHistory}>
      <thead className={css.tHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(elem => (
          <tr key={elem.id} className={css.tbody}>
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  )
};

export default TransactionHistory;
