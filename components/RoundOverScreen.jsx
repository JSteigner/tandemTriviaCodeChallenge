import React from 'react';
import propTypes from 'prop-types';
import {
  Container, Card, Button, ListGroup,
} from 'react-bootstrap';

const RoundOverScreen = ({
  score,
  setCurrentIndex,
  currentIndex,
  counter,
  setCounter,
  setScore,
}) => {
  const resetGame = () => {
    setScore(0);
    if (currentIndex === 10) {
      setCurrentIndex(11);
    }
    if (counter === 20) {
      setCurrentIndex(0);
      setCounter(0);
    }
  };

  return (
    <div>
      <Container className="text-center">
        <Card bg='info' text='white'>
          <Card.Header as="h2">
            Tandem Trivia Training
          </Card.Header>
          <ListGroup>
            <ListGroup.Item variant='secondary' style={{ fontWeight: 'bold', fontSize: 25 }}>
              Round Over, Thanks for playing!
              <br />
              Your final score for this round is {score}.
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <br />
      <Button onClick={resetGame} size="lg" variant="dark">Play Again!</Button>
      </Container>
    </div>
  );
};

RoundOverScreen.propTypes = {
  score: propTypes.number.isRequired,
  currentIndex: propTypes.number.isRequired,
  setCurrentIndex: propTypes.func.isRequired,
  counter: propTypes.number.isRequired,
  setCounter: propTypes.func.isRequired,
  setScore: propTypes.func.isRequired,
};

export default RoundOverScreen;
