import React from 'react';
import './ChoiceArea.scss';
import { renderPropertyByName } from './renderPropertyByName';

const ChoiceArea = ({ choiceArea }) => {
  const renderChoices = () => {
    return choiceArea.children.map((choice, index) => {
      const number = `(${String.fromCharCode(65 + choice.number)})`;

      return (
        <div key={index} className="ChoiceArea__choices">
          <span className="number">{number}</span>
          {choice.children.map((item, index) => {
            return renderPropertyByName(item, index);
          })}
        </div>
      );
    });
  };

  return <div className="ChoiceArea">{renderChoices()}</div>;
};

export default ChoiceArea;
