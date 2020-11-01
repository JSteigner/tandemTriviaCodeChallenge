import React from 'react';
import propTypes from 'prop-types';
import {
  Container, Card, Button, ListGroup,
} from 'react-bootstrap';
import Styles from '../Styles';

const RoundOverScreen = ({
  score,
  setScore,
  currentIndex,
  setCurrentIndex,
  counter,
  setCounter,
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
          <Card.Header as="h2" style={Styles.header}>
            Tandem Trivia Training
          </Card.Header>
          <ListGroup>
            <ListGroup.Item variant='secondary' style={Styles.roundOverListItem}>
              Round Over, Thanks for Playing!
              <br />
              Your Final Score for this Round is {score}.
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <br />
        { currentIndex === 10
          ? <Button onClick={resetGame} size="lg" variant="dark" style={Styles.button}>Play Round 2!</Button>
          : <Button onClick={resetGame} size="lg" variant="dark" style={Styles.button}>Play Again!</Button>
        }
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
