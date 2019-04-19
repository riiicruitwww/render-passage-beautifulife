import React from 'react';
import PropTypes from 'prop-types';
import './Vocabulary.scss';

const Vocabulary = ({ vocabulary }) => {
  return (
    <span className="Vocabulary">
      <span className="Vocabulary__word">{vocabulary.word}:</span>
      <span className="Vocabulary__meaning">{vocabulary.meaning}</span>
    </span>
  );
};

Vocabulary.propTypes = {
  vocabulary: PropTypes.shape({
    word: PropTypes.string.isRequired,
    meaning: PropTypes.string.isRequired
  }).isRequired
};

export default Vocabulary;
