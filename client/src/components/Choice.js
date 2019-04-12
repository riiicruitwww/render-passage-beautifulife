import React from 'react';
import './Choice.scss';
import Paragraph from './Paragraph';

const Choice = ({ choice, questionId, userAnswer, onClickChoice }) => {
  const number = `(${String.fromCharCode(97 + choice.number)})`;
  const isSelected = userAnswer[questionId] === choice.number;

  const handleChoiceClick = (choiceNumber, ev) => {
    onClickChoice(questionId, choiceNumber);
  };

  const renderChoice = () => {
    return choice.children.map((item, index) => (
      <Paragraph key={index} paragraph={item} />
    ));
  };

  return (
    <div
      className={isSelected ? 'Choice selected' : 'Choice'}
      onClick={handleChoiceClick.bind(this, choice.number)}
    >
      <span className="Choice__number">{number}</span>
      {renderChoice()}
    </div>
  );
};

export default Choice;
