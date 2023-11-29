import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import NotificationMessage from './Statistics/NotificationMessage';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? (feedback.good * 100) / total : 0;
  };

  const incrementFeedback = name => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
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
