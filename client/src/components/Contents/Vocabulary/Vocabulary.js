import React from 'react';
import './Vocabulary.scss';

const Vocabulary = ({ vocabulary }) => {
  return (
    <span className="Vocabulary">
      <span className="Vocabulary__word">{vocabulary.word}:</span>
      <span className="Vocabulary__meaning">{vocabulary.meaning}</span>
    </span>
  );
};

export default Vocabulary;
