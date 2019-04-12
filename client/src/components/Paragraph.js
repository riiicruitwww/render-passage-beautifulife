import React from 'react';
import './Paragraph.scss';
import { renderPropertyByName } from './renderPropertyByName';

const Paragraph = ({ paragraph }) => {
  const renderParagraph = () => {
    return paragraph.children.map((item, index) => {
      return renderPropertyByName(item, index);
    });
  };

  return (
    <p className="Paragraph" style={paragraph.style}>
      {renderParagraph()}
    </p>
  );
};

export default Paragraph;
