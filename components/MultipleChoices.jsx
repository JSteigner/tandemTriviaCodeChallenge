import React, { useState, useMemo } from 'react';
import _ from 'underscore';
import propTypes from 'prop-types';

const MultipleChoices = ({
  currentIndex, setSelectedAnswer, data, correctAnswer,
}) => {
  const [memoState] = useState(null);
  const allChoices = [...(data[currentIndex].incorrect)];
  allChoices.push(correctAnswer);
  const allChoicesShuffled = _.shuffle(allChoices);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return useMemo(() => (
    <div>
      <form>
        <ol>
          <li>
            <label>
              {allChoicesShuffled[0]}
              <input
                name='Multiple Choices'
                type="radio"
                value={allChoicesShuffled[0]}
                id={allChoicesShuffled[0]}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              {allChoicesShuffled[1]}
              <input
                name='Multiple Choices'
                type="radio"
                value={allChoicesShuffled[1]}
                id={allChoicesShuffled[1]}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              {allChoicesShuffled[2]}
              <input
                name='Multiple Choices'
                type="radio"
                value={allChoicesShuffled[2]}
                id={allChoicesShuffled[2]}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
              {allChoicesShuffled[3]}
              <input
                name='Multiple Choices'
                type="radio"
                value={allChoicesShuffled[3]}
                id={allChoicesShuffled[3]}
                onChange={handleChange}
              />
            </label>
          </li>
        </ol>
      </form>
    </div>
  ), [memoState]);
};

MultipleChoices.propTypes = {
  currentIndex: propTypes.number.isRequired,
  setSelectedAnswer: propTypes.func.isRequired,
  data: propTypes.array.isRequired,
  correctAnswer: propTypes.string.isRequired,
};

export default MultipleChoices;
