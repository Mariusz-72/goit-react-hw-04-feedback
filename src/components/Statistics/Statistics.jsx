import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

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

    Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    };

export default Statistics;
