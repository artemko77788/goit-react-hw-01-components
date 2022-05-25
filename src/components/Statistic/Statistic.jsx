import PropTypes from 'prop-types';
// import s from './Statistic.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistic = props => {
  const { title, stats } = props;
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span>{label}</span>
              <span>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  key: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistic;
