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
        if (item.data.styles[0] === 'blank') {
          const { begin, offset } = item.data;
          order = `----${item.order}----`;
          stringArray = [
            chunkText.substring(0, begin),
            { order },
            chunkText.substring(begin + offset)
          ];
        }
      });
    }

    return stringArray.map((string, index) => {
      if (string.order) {
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
