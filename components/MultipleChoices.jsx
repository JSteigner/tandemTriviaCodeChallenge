import React, { useState, useMemo } from 'react';
import _ from 'underscore';
import MultipleChoiceItem from './MultipleChoiceItem.jsx';
// import SubmitButton from './SubmitButton.jsx';

const MultipleChoices = ({
  currentIndex, setCurrentIndex, setSelectedAnswer, data, correctAnswer,
}) => {
  const [memoState] = useState(null);
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
