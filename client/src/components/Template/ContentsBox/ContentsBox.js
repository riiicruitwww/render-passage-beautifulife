import React from 'react';
import PropTypes from 'prop-types';
import './ContentsBox.scss';

const ContentsBox = ({ children }) => {
  return <div className="ContentsBox">{children}</div>;
};

ContentsBox.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default ContentsBox;
