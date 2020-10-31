/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Question from './Question.jsx';
import MultipleChoices from './MultipleChoices.jsx';
import SubmitButton from './SubmitButton.jsx';
import CorrectAnswerScreen from './CorrectAnswerScreen.jsx';
import WrongAnswerScreen from './WrongAnswerScreen.jsx';
import RoundOverScreen from './RoundOverScreen.jsx';
import data from '../Apprentice_TandemFor400_Data.json';

const AppContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submittedAnswer, setSubmittedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const correctAnswer = data[currentIndex].correct;

  useEffect(() => {
    if (correctAnswer === submittedAnswer) {
      setScore(value => value + 1);
    }
  }, [submittedAnswer]);

  const renderNextQuestion = () => {
    setCurrentIndex(value => value + 1);
    setSelectedAnswer(null);
    setSubmittedAnswer(null);
  };

  if (correctAnswer === submittedAnswer) {
    return (
    <div>
      <CorrectAnswerScreen
        correctAnswer={correctAnswer}
        renderNextQuestion={renderNextQuestion}
        score={score}
      />
    </div>
    );
  } if (correctAnswer !== submittedAnswer && submittedAnswer !== null) {
    return (
      <div>
        <WrongAnswerScreen
          correctAnswer={correctAnswer}
          renderNextQuestion={renderNextQuestion}
          score={score}
        />
      </div>
    );
  } if (currentIndex === 10) {
    return <RoundOverScreen score={score} />;
  }
  return (
    <div>
      <Container fluid>
      <Question
        currentIndex={currentIndex}
        data={data}
      />
      <MultipleChoices
         currentIndex={currentIndex}
         selectedAnswer={selectedAnswer}
         setSelectedAnswer={setSelectedAnswer}
         setSubmittedAnswer={setSubmittedAnswer}
         correctAnswer={correctAnswer}
         data={data}
      />
      <SubmitButton
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
        setSubmittedAnswer={setSubmittedAnswer}
      />
     </Container>
    </div>
  );
};

export default AppContainer;
