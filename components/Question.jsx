import React from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Question = ({ currentIndex, data }) => (
  <div>
    <Card className="text-center" bg='primary'>
      <Card.Header as="h2">
        Tandem Trivia Training
      </Card.Header>
      <Card.Body>
        <Card.Title as="h4">
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
