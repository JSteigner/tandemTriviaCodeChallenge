import React from 'react';
import propTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const CorrectAnswerScreen = ({ correctAnswer, renderNextQuestion, score }) => (
  <div className="text-center">
    <Card>
      <Card.Header as="h2">
        Tandem Trivia Training
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {correctAnswer} is Correct!
        </Card.Title>
        <Card.Text as="h5">
          Your current score is {score}.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
    <Button onClick={renderNextQuestion} size="lg">Next Question</Button>
  </div>
);

CorrectAnswerScreen.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  renderNextQuestion: propTypes.func.isRequired,
  score: propTypes.number.isRequired,
};

export default CorrectAnswerScreen;
