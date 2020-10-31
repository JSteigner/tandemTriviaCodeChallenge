import React from 'react';

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

export default SubmitButton;
