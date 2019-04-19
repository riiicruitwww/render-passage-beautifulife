import React from 'react';
import PropTypes from 'prop-types';
import './Passage.scss';
import { WithRenderPropertyByName } from 'Contents';

const Passage = ({ passage }) => {
  return (
    <div className="Passage">
      <WithRenderPropertyByName property={passage.view_tree} />
    </div>
  );
};

Passage.propTypes = {
  passage: PropTypes.shape({
    view_tree: PropTypes.instanceOf(Object).isRequired
  }).isRequired
};

export default Passage;
