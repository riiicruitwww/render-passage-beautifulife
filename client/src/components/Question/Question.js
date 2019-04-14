import React from 'react';
import './Question.scss';
import WithRenderPropertyByName from '../WithRenderPropertyByName/WithRenderPropertyByName';

const Question = ({ questionType, question }) => {
  return (
    <div className="Question">
      <span className={`Question__order ${questionType}`}>
        {question.order + 1}.
        {questionType === 'correct' ? (
          <span className="icon">
            <i className="fas fa-check-circle" />
          </span>
        ) : null}
        {questionType === 'wrong' ? (
          <span className="icon">
            <i className="fas fa-times-circle" />
          </span>
        ) : null}
      </span>
      <div className="Question__choice-area">
        <WithRenderPropertyByName
          property={question.view_tree}
          questionId={question.id}
        />
      </div>
    </div>
  );
};

export default Question;
