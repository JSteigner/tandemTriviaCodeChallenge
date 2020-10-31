import React, { useState, useMemo } from 'react';
import _ from 'underscore';
import MultipleChoiceItem from './MultipleChoiceItem.jsx';

const MultipleChoices = ({
  currentIndex, setCurrentIndex, setSelectedAnswer, data,
}) => {
  const [memoState] = useState(null);
  const correctAnswer = data[currentIndex].correct;
  const allChoices = [...(data[currentIndex].incorrect)];
  allChoices.push(correctAnswer);
  const allChoicesShuffled = _.shuffle(allChoices);

  const choiceItem = allChoicesShuffled.map((choice) => <div key={choice}>
      <MultipleChoiceItem choice={choice} setSelectedAnswer={setSelectedAnswer} />
    </div>);

  return useMemo(() => (
    <div>
      {choiceItem}
    </div>
  ), [memoState]);
};

export default MultipleChoices;
