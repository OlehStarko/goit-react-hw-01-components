export const Statistics = ({ statistic: { label, percentage } }) => {
  return (
    <>
      <p>{label}</p>
      <p>{percentage}%</p>
    </>
  );
};
