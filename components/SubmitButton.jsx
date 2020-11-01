import React from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Styles from '../Styles';

const SubmitButton = ({ selectedAnswer, setSubmittedAnswer }) => {
  const submitAnswer = () => {
    setSubmittedAnswer(selectedAnswer);
  };

  return (
    <div className="text-center">
      <Button onClick={submitAnswer} size="lg" variant="dark"style={Styles.button}>Submit</Button>
    </div>
  );
};

SubmitButton.propTypes = {
  selectedAnswer: propTypes.string,
  setSubmittedAnswer: propTypes.func.isRequired,
};

export default SubmitButton;
