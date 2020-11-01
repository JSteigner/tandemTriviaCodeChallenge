import React from 'react';
import propTypes from 'prop-types';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Styles from '../Styles';

const WrongAnswerScreen = ({ correctAnswer, renderNextQuestion, score }) => (
    <div className="text-center">
      <Card bg='info' text='white' border="secondary">
        <Card.Header as="h1" style={Styles.header}>
          Tandem Trivia Training
        </Card.Header>
          <ListGroup>
            <ListGroup.Item variant='secondary' style={Styles.listItem}>
              <div>
              Good Try! but {correctAnswer} is Correct.
              </div>
              Your Current Score is {score}.
            </ListGroup.Item>
          </ListGroup>
          </Card>
      <br />
      <Button onClick={renderNextQuestion} size="lg" variant="dark" style={Styles.button}>Next Question</Button>
    </div>
);

WrongAnswerScreen.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  renderNextQuestion: propTypes.func.isRequired,
  score: propTypes.number.isRequired,
};

export default WrongAnswerScreen;
