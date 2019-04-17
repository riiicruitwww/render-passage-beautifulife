import React, { Fragment } from 'react';
import './Chunk.scss';

const Chunk = ({ chunk: { children, chunk_id, type }, chunkMap }) => {
  const renderChunk = () => {
    const mappedChunk = chunkMap[chunk_id];
    const chunkText = mappedChunk[type];
    let stringArray = [chunkText];

    if (children.length !== 0) {
      children.forEach(item => {
        if (item.data.styles[0] === 'blank') {
          const { begin, offset } = item.data;
          const order = `----${item.order}----`;
          stringArray = [
            chunkText.substring(0, begin),
            order,
            chunkText.substring(begin + offset)
          ];
        }
      });
    }

    return stringArray.map((string, index) => {
      return (
        <span
          key={index}
          className={`Chunk ${index === 1 ? 'order' : ''}`}
          data-id={chunk_id}
        >
          {string}
        </span>
      );
    });
  };

  return <Fragment>{renderChunk()}</Fragment>;
};

export default Chunk;
