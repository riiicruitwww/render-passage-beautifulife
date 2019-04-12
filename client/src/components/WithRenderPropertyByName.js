import React from 'react';
import ChoiceContainer from '../containers/ChoiceContainer';
import Paragraph from './Paragraph';

const WithRenderPropertyByName = ({property, questionId}) => {
  const renderPropertyByName = (property, index) => {
    switch (property.name) {
      case 'root':
        return property.children.map((item, index) => {
          return renderPropertyByName(item, index);
        });

      case 'choice_area':
      case 'question_area':
        return property.children.map((item, index) => {
          return renderPropertyByName(item, index);
        });

      case 'choice':
        return (
          <ChoiceContainer
            key={index}
            choice={property}
            questionId={questionId}
          />
        );

      case 'paragraph':
        return <Paragraph key={index} paragraph={property} />;

      default:
        return null;
    }
  };

  return renderPropertyByName(property);
};

export default WithRenderPropertyByName;