import React from 'react';
import './Question.scss';
import WithRenderPropertyByName from './WithRenderPropertyByName';

const Question = ({ question }) => {
  return (
    <div className="Question">
      <span className="Question__order">{question.order + 1}.</span>
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
