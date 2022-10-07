import PropTypes from 'prop-types';

export const Statistics = ({ statistic: { label, percentage } }) => {
  return (
    <>
      <p>{label}</p>
      <p>{percentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
