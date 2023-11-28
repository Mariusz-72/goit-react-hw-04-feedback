import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={css.StatisticsList}>
            <li className={css.statisticsItem}>
            <p>
                <span className={css.good}>Good</span> : {good}
            </p>
            </li>
            <li className={css.statisticsItem}>
            <p>
                <span className={css.neutral}>Neutral</span> : {neutral}
            </p>
            </li>
            <li className={css.statisticsItem}>
            <p>
                <span className={css.bad}>Bad</span> : {bad}
            </p>
            </li>
            <li className={css.statisticsItem}>
            <p>Total : {total}</p>
            </li>
            <li className={css.statisticsItem}>
            <p>Positive feedback : {Math.round(positivePercentage)}%</p>
            </li>
        </ul>
    );
};

Statistics.protoTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};
export default Statistics;