import React, { useReducer } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import NotificationMessage from './Statistics/NotificationMessage';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, [action.name]: state[action.name] + 1 };
    default:
      return state;
  }
};

const App = () => {
  const [feedback, dispatch] = useReducer(feedbackReducer, initialState);

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? (feedback.good * 100) / total : 0;
  };

  const incrementFeedback = name => {
    dispatch({ type: 'INCREMENT', name });
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const feedbackOptions = Object.keys(feedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={incrementFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <NotificationMessage />
        )}
      </Section>
    </div>
  );
};

export default App;
