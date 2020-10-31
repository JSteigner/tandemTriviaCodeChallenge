import React from 'react';
import propTypes from 'prop-types';

const CorrectAnswerScreen = ({ correctAnswer, renderNextQuestion, score }) => (
  <div>
    <div>
    {correctAnswer} is correct!
    </div>
    <div>
    Your current score is {score}.
    </div>
    <button onClick={renderNextQuestion}>Next Question</button>
  </div>
);

CorrectAnswerScreen.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  renderNextQuestion: propTypes.func.isRequired,
  score: propTypes.number.isRequired,
};

export default CorrectAnswerScreen;
