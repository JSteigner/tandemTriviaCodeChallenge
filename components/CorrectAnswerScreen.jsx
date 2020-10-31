import React from 'react';

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

export default CorrectAnswerScreen;
