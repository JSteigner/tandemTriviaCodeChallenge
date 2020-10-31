import React from 'react';
import propTypes from 'prop-types';

const WrongAnswerScreen = ({ correctAnswer, renderNextQuestion, score }) => (
  <div>
    <div>
    Good try! but {correctAnswer} is correct.
    </div>
    <div>
      Your current score is {score}.
    </div>
    <button onClick={renderNextQuestion}>Next Question</button>
  </div>
);

WrongAnswerScreen.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  renderNextQuestion: propTypes.func.isRequired,
  score: propTypes.number.isRequired,
};

export default WrongAnswerScreen;
