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
  onComplete,
  onSelect
}) => {
  const handleChoiceClick = choiceNumber => {
    onSelect(questionId, choiceNumber);

    if (
      questionsLength === Object.keys(userAnswer).length + 1 &&
      !userAnswer[questionId]
    ) {
      onComplete();
    }
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
