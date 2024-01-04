import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePart}) => {
  return (
    <div>
    <ul className={css.list}>
        <li className={css.list__item}>
            Good: {good}
        </li>
        <li className={css.list__item}>
            Neutral: {neutral}
        </li>
        <li className={css.list__item}>
            Bad: {bad}
        </li>
        <li className={css.list__item}>
            Total: {total}
        </li>
        <li className={css.list__item}>
            Positive feedback Part: {positivePart}%
        </li>
    </ul>
</div>
  );
}

Statictics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePart: PropTypes.number,
};

export default Statictics
