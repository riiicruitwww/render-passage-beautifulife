import React from 'react';
import './Question.scss';
import { WithRenderPropertyByName } from 'Contents';

const Question = ({ questionType, question: { id, order, view_tree } }) => {
  return (
    <div className="Question">
      <span className={`Question__order ${questionType}`}>
        {order + 1}.
        {questionType === 'correct' && (
          <span className="icon">
            <i className="fas fa-check-circle" />
          </span>
        )}
        {questionType === 'wrong' && (
          <span className="icon">
            <i className="fas fa-times-circle" />
          </span>
        )}
      </span>
      <div className="Question__choice-area">
        <WithRenderPropertyByName property={view_tree} questionId={id} />
      </div>
    </div>
  );
};

export default Question;
