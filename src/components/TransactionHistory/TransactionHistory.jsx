import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
function TransactionHistory({
  typeHeader,
  amountHeader,
  currencyHeader,
  items,
}) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.title}>{typeHeader}</th>
          <th className={s.title}>{amountHeader}</th>
          <th className={s.title}>{currencyHeader}</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={s.items}>{type}</td>
              <td className={s.items}>{amount}</td>
              <td className={s.items}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  typeHeader: PropTypes.string.isRequired,
  amountHeader: PropTypes.string.isRequired,
  currencyHeader: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
