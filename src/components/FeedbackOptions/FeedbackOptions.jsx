import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <div className={css.btn_container}>
                {options.map(option => (
                    <button
                        key={option}
                        name={option}
                        className={css.btn}
                        onClick={onLeaveFeedback}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
