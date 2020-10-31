import React, { useState, useEffect } from 'react';
import data from '../Apprentice_TandemFor400_Data.json';
import Question from './Question.jsx';
import MultipleChoices from './MultipleChoices.jsx';
import SubmitButton from './SubmitButton.jsx';

const Container = () => {
  // const [question, setQuestion] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div>
      <Question
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        data={data}
      />
      <MultipleChoices
         currentIndex={currentIndex}
         setCurrentIndex={setCurrentIndex}
         setSelectedAnswer={setSelectedAnswer}
        //  data={data}
      />
      <SubmitButton />
    </div>
  );
};

export default Container;
