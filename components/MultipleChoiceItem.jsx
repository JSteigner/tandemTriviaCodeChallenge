import React from 'react';
import propTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const MultipleChoiceItem = ({ choice, setSelectedAnswer }) => {
  const handleChange = (event) => {
    setSelectedAnswer(event.target.innerHTML);
  };

  const styles = {
    listItem: {
      fontWeight: 'bold',
      fontSize: 22,
    },
  };

  return (
    <ListGroup>
      <ListGroup.Item
        action onClick={handleChange}
        variant='secondary'
        style={styles.listItem}
      >
        {choice}
      </ListGroup.Item>
    </ListGroup>
  );
};

MultipleChoiceItem.propTypes = {
  choice: propTypes.string.isRequired,
  setSelectedAnswer: propTypes.func.isRequired,
};

export default MultipleChoiceItem;
