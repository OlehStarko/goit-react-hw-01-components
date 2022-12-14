import { Statistics } from './Statistics';
import css from 'css/statistics.module.css';

export const StatisticsList = ({ StatisticsData, title }) => {
  return (
    <div className={css.statistic__container}>
      {title && <h2 className={css.statistic__title}>{title}</h2>}

      <ul className={css.statistic__list}>
        {StatisticsData.map(statistic => (
          <li
            key={statistic.id}
            className={css.statistic__item}
            style={{
              backgroundColor: generateRandomColor(),
            }}
          >
            <Statistics statistic={statistic} />
          </li>
        ))}
      </ul>
    </div>
  );
};

function generateRandomColor() {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}
