import React from 'react';
import './Question.scss';
import WithRenderPropertyByName from './WithRenderPropertyByName';

const Question = ({ checkResult, isCheckComplete, question }) => {
  return (
    <div className="Question">
      <span
        className={
          isCheckComplete
            ? checkResult[question.id].result
              ? 'Question__order correct'
              : 'Question__order wrong'
            : 'Question__order'
        }
      >
        {question.order + 1}.
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
