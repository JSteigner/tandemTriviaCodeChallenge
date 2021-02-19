import React from 'react';
import propTypes from 'prop-types';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Styles from '../Styles';

const CorrectAnswerScreen = ({ correctAnswer, renderNextQuestion, score }) => (
    <div className="text-center">
      <Card bg='info' text='white'>
        <Card.Header as="h1" style={Styles.header}>
          Tandem Trivia Training
        </Card.Header>
        <ListGroup>
          <ListGroup.Item variant='secondary' style={Styles.listItem}>
            <div>
              Awesome Job! {correctAnswer} is Correct!
            </div>
            Your Current Score is {score}.
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <br />
      <Button onClick={renderNextQuestion} size="lg" variant="dark" style={Styles.button}>Next Question</Button>
    </div>
);

CorrectAnswerScreen.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  renderNextQuestion: propTypes.func.isRequired,
  score: propTypes.number.isRequired,
};

export default CorrectAnswerScreen;
