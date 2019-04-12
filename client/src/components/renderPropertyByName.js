import React from 'react';
import ChoiceArea from './ChoiceArea';
import Paragraph from './Paragraph';
import ChunkContainer from '../containers/ChunkContainer';

export const renderPropertyByName = (property, index) => {
  switch (property.name) {
    case 'root':
      return property.children.map((item, index) => {
        return renderPropertyByName(item, index);
      });

    case 'question_area':
    case 'choice':
      return property.children.map((item, index) => {
        return renderPropertyByName(item, index);
      });

    case 'choice_area':
      return <ChoiceArea key={index} choiceArea={property} />;

    case 'paragraph':
      return <Paragraph key={index} paragraph={property} />;

    case 'chunk_ref':
      return <ChunkContainer key={index} chunk={property} />;

    default:
      return null;
  }
};
