import React, { useState } from 'react';

const Question = ({ currentIndex, setCurrentIndex, data }) => {
  return (
    <div>
      {data[currentIndex].question}
    </div>
  )
};

export default Question;
