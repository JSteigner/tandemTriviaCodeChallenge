import React from 'react';
import _ from 'underscore';
import MultipleChoiceItem from './MultipleChoiceItem.jsx';
import data from '../Apprentice_TandemFor400_Data.json';

const MultipleChoices = ({
  currentIndex, setCurrentIndex, setSelectedAnswer,
}) => {
  console.log(data[currentIndex]);
  const correctAnswer = data[currentIndex].correct;
  const allChoices = [...(data[currentIndex].incorrect)];
  allChoices.push(correctAnswer);
  console.log('allChoices', allChoices);
  const allChoicesShuffled = _.shuffle(allChoices);

  const choiceItem = allChoicesShuffled.map((choice) => <div key={choice}>
      <MultipleChoiceItem choice={choice} setSelectedAnswer={setSelectedAnswer} />
    </div>);

  return (
    <div>
      {choiceItem}
    </div>
  );
};

export default MultipleChoices;
