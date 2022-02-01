import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomHexColor from '../../helpers/randomColorHex';

function Statistics({ title = '', stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
