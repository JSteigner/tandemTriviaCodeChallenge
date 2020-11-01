import React from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Question = ({ currentIndex, data }) => (
  <div>
    <Card className="text-center" bg='info' text='white'>
      <Card.Header as="h1">
        Tandem Trivia Training
      </Card.Header>
      <Card.Body>
        <Card.Title as="h3">
        {data[currentIndex].question}
        </Card.Title>
      </Card.Body>
    </Card>
  </div>
);

Question.propTypes = {
  currentIndex: propTypes.number.isRequired,
  data: propTypes.array.isRequired,
};

export default Question;
