import React from 'react';
import './Choice.scss';
import Paragraph from './Paragraph';

const Choice = ({
  checkResult,
  choice,
  isCheckComplete,
  questionId,
  questionsLength,
  userAnswer,
  onClickChoice
}) => {
  const number = String.fromCharCode(97 + choice.number);
  const isSelected = userAnswer[questionId] === number;
  let choiceType = isSelected ? 'selected' : '';

  if (isCheckComplete) {
    if (checkResult[questionId].correctAnswer === number) {
      choiceType = 'answer';
    } else if (isSelected) {
      choiceType = 'wrong';
    }
  }

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
      onClick={handleChoiceClick.bind(this, number)}
    >
      <span className="Choice__number">{`(${number})`}</span>
      {renderChoice()}
    </div>
  );
};

export default Choice;
