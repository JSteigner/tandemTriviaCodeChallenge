/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useMemo } from 'react';
import _ from 'underscore';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import MultipleChoiceItem from './MultipleChoiceItem.jsx';

const MultipleChoices = ({
  currentIndex, setSelectedAnswer, data, correctAnswer,
}) => {
  const [memoState] = useState(null);
  const allChoices = [...(data[currentIndex].incorrect)];
  allChoices.push(correctAnswer);
  const allChoicesShuffled = _.shuffle(allChoices);

  const choiceItem = allChoicesShuffled.map((choice) =>
    <div key={choice}>
      <MultipleChoiceItem choice={choice} setSelectedAnswer={setSelectedAnswer} />
    </div>);

  return useMemo(() => (
    <>
      <Card className="text-center" border="secondary">
        {choiceItem}
      </Card>
      <br />
    </>
  ), [memoState]);
};

MultipleChoices.propTypes = {
  currentIndex: propTypes.number.isRequired,
  setSelectedAnswer: propTypes.func.isRequired,
  data: propTypes.array.isRequired,
  correctAnswer: propTypes.string.isRequired,
};

export default MultipleChoices;
