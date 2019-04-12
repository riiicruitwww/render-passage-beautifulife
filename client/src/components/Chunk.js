import React, { Fragment } from 'react';
import './Chunk.scss';

const Chunk = ({ chunk, chunkMap }) => {
  const renderChunk = () => {
    const mappedChunk = chunkMap[chunk.chunk_id];
    const chunkText = mappedChunk[chunk.type];
    let stringArray = [chunkText];
    let order;

    if (chunk.children.length) {
      chunk.children.forEach(item => {
        if (item.name === 'segment') {
          const { begin, offset } = item.data;
          stringArray = [
            chunkText.substring(0, begin),
            chunkText.substring(begin, begin + offset),
            chunkText.substring(begin + offset)
          ];

          order = `----${item.order}----`;
        }
      });
    }

    return stringArray.map((string, index) => {
      if (index === 1) {
        return (
          <span key={index} className="Chunk order">
            {order}
          </span>
        );
      }

      return (
        <span key={index} className="Chunk" data-id={chunk.chunk_id}>
          {string}
        </span>
      );
    });
  };

  return <Fragment>{renderChunk()}</Fragment>;
};

export default Chunk;
