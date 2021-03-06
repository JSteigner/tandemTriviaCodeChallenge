import React from 'react';
import propTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Styles from '../Styles';

const MultipleChoiceItem = ({ choice, setSelectedAnswer }) => {
  const handleChange = (event) => {
    setSelectedAnswer(event.target.innerHTML);
  };

  return (
    <ListGroup>
      <ListGroup.Item
        action onClick={handleChange}
        variant='secondary'
        style={Styles.multipleChoiceListItem}
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
