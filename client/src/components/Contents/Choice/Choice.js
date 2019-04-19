import React from 'react';
import PropTypes from 'prop-types';
import './Choice.scss';
import { Paragraph } from 'Contents';

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
  const handleChoiceClick = () => {
    onSelect(questionId, number);

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
    <div className={`Choice ${choiceType}`} onClick={handleChoiceClick}>
      <span className="Choice__number">{`(${number})`}</span>
      {renderChoice()}
    </div>
  );
};

Choice.propTypes = {
  choice: PropTypes.shape({
    children: PropTypes.array.isRequired
  }).isRequired,
  choiceType: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionsLength: PropTypes.number.isRequired,
  userAnswer: PropTypes.objectOf(PropTypes.string).isRequired,
  onComplete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Choice;
