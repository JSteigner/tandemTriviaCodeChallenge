import React from 'react';

const MultipleChoiceItem = ({ choice, setSelectedAnswer }) => {
  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <form>
        <input
          name={choice}
          type='radio'
          value={choice}
          id={choice}
          onChange={handleChange}
        />
        <label htmlFor={choice}>{choice}</label>
    </form>
  );
};

export default MultipleChoiceItem;
