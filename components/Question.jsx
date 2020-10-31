import React from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Question = ({ currentIndex, data }) => (
  <div>
    <Card>
      <Card.Body>
        <Card.Title>
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
