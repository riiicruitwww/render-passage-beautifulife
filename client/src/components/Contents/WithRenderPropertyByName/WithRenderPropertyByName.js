import React from 'react';
import PropTypes from 'prop-types';
import ChoiceContainer from 'containers/ChoiceContainer';
import { Paragraph } from 'Contents';

const WithRenderPropertyByName = ({ property, questionId }) => {
  const renderPropertyByName = (property, index) => {
    switch (property.name) {
      case 'root':
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

WithRenderPropertyByName.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  questionId: PropTypes.number
};

export default WithRenderPropertyByName;
