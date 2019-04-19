import React from 'react';
import PropTypes from 'prop-types';
import ChunkContainer from 'containers/ChunkContainer';

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

Paragraph.propTypes = {
  paragraph: PropTypes.shape({
    children: PropTypes.array.isRequired
  }).isRequired
};

export default Paragraph;
