import PropTypes from 'prop-types';

export const Transaction = ({
  transaction: { id, type, amount, currency },
}) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
