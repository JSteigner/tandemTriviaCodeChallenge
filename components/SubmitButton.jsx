import React from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const SubmitButton = ({ selectedAnswer, setSubmittedAnswer }) => {
  const submitAnswer = () => {
    setSubmittedAnswer(selectedAnswer);
  };

  return (
    <div className="text-center">
      <Button onClick={submitAnswer} size="lg">Submit</Button>
    </div>
  );
};

SubmitButton.propTypes = {
  selectedAnswer: propTypes.string,
  setSubmittedAnswer: propTypes.func.isRequired,
};

export default SubmitButton;
