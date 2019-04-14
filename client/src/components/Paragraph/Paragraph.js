import React from 'react';
import ChunkContainer from '../../containers/ChunkContainer';

const Paragraph = ({ paragraph }) => {
  const renderParagraph = () => {
    return paragraph.children.map((item, index) => (
      <ChunkContainer key={index} chunk={item} />
    ));
  };

  return (
    <p className="Paragraph" style={paragraph.style}>
      {renderParagraph()}
    </p>
  );
};

export default Paragraph;
