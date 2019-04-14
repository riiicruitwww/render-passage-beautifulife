import React from 'react';
import './Choice.scss';
import Paragraph from '../Paragraph/Paragraph';

const Choice = ({
  choice,
  choiceType,
  number,
  questionId,
  questionsLength,
  userAnswer,
  onClickChoice
}) => {
  const handleChoiceClick = (choiceNumber, ev) => {
    onClickChoice(questionId, choiceNumber, questionsLength, userAnswer);
  };

  const renderChoice = () => {
    return choice.children.map((item, index) => (
      <Paragraph key={index} paragraph={item} />
    ));
  };

  return (
    <div
      className={`Choice ${choiceType}`}
      onClick={handleChoiceClick.bind(null, number)}
    >
      <span className="Choice__number">{`(${number})`}</span>
      {renderChoice()}
    </div>
  );
};

export default Choice;
