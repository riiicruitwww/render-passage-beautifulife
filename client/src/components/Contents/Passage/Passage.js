import React from 'react';
import './Passage.scss';
import { WithRenderPropertyByName } from 'Contents';

const Passage = ({ passage }) => {
  return (
    <div className="Passage">
      <WithRenderPropertyByName property={passage.view_tree} />
    </div>
  );
};

export default Passage;
