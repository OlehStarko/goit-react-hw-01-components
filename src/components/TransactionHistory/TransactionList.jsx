import { Transaction } from './Transaction';
import css from 'css/transaction.module.css';
export const TransactionList = ({ TransactionData }) => {
  return (
    <table className={css.tansaction__container}>
      <thead>
        <tr className={css.tansaction__header}>
          <th className={css.tansaction__headerCell}>Type</th>
          <th className={css.tansaction__headerCell}>Amount</th>
          <th className={css.tansaction__headerCell}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tansaction__body}>
        {TransactionData.map(transaction => (
          <tr key={transaction.id} className={css.tansaction__bodyLine}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
