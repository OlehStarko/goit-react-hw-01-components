import statistic from '../../data/data.json';

export const Statistics = ({ statistic: { label, percentage } }) => {
  return (
    <>
      <p>{label}</p>
      <p>{percentage}%</p>
    </>
  );
};

<Statistics label={statistic.label} percentage={statistic.percentage} />;
