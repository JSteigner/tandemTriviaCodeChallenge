import React from 'react';
import propTypes from 'prop-types';

const SubmitButton = ({ selectedAnswer, setSubmittedAnswer }) => {
  const submitAnswer = () => {
    setSubmittedAnswer(selectedAnswer);
  };

  return (
    <div>
      <button onClick={submitAnswer}>Submit</button>
    </div>
  );
};

SubmitButton.propTypes = {
  selectedAnswer: propTypes.string,
  setSubmittedAnswer: propTypes.func.isRequired,
};

export default SubmitButton;
