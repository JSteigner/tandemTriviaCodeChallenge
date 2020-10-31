import React from 'react';
import propTypes from 'prop-types';

const RoundOverScreen = ({ score }) => (
  <div>
    <div>
    Round Over, Thanks for playing!
    </div>
    <div>
      Your final score for this round is {score}.
    </div>
  </div>
);

RoundOverScreen.propTypes = {
  score: propTypes.number.isRequired,
};

export default RoundOverScreen;
