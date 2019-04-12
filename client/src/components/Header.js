import React from 'react';
import './Header.scss';

const Header = ({ packType }) => {
  return (
    <div className="Header">
      <div className="Header__title">
        <h1 >Santa Toeic</h1>
        <span>{packType && `(${packType})`}</span>
      </div>
      <button className="Header__back-btn">돌아가기</button>
    </div>
  );
};

export default Header;
