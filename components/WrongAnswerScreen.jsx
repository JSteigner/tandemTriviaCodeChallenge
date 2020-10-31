import React from 'react';

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

export default WrongAnswerScreen;
