import transaction from '../../data/transactions.json';

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
<Transaction
  type={transaction.type}
  amount={transaction.amount}
  currency={transaction.currency}
/>;
