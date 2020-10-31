import React from 'react';

const MultipleChoiceItem = ({ choice, setSelectedAnswer }) => {
  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <form>
      <label>
        {choice}
        <input
          name={choice}
          type="checkbox"
          value={choice}
          id={choice}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default MultipleChoiceItem;
