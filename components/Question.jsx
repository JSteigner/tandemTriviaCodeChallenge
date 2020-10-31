import React from 'react';
import propTypes from 'prop-types';

const Question = ({ currentIndex, data }) => (
    <div>
      {data[currentIndex].question}
    </div>
);

Question.propTypes = {
  currentIndex: propTypes.number.isRequired,
  data: propTypes.array.isRequired,
};

export default Question;
