import React from 'react';
import propTypes from 'prop-types';
import { Card, Button, ListGroup } from 'react-bootstrap';

const CorrectAnswerScreen = ({ correctAnswer, renderNextQuestion, score }) => (
  <div className="text-center">
    <Card bg='info' text='white'>
      <Card.Header as="h2">
        Tandem Trivia Training
      </Card.Header>
      <ListGroup>
        <ListGroup.Item variant='secondary' style={{ fontSize: 25 }}>
          <div>
          Awesome Job! {correctAnswer} is Correct!
          </div>
          Your Current Score is {score}.
        </ListGroup.Item>
      </ListGroup>
    </Card>
    <br />
    <Button onClick={renderNextQuestion} size="lg" variant="dark">Next Question</Button>
  </div>
);

CorrectAnswerScreen.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  renderNextQuestion: propTypes.func.isRequired,
  score: propTypes.number.isRequired,
};

export default CorrectAnswerScreen;
