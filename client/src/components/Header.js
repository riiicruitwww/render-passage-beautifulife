import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header__title">Santa Toeic</h1>
      <button className="Header__back-btn">돌아가기</button>
    </div>
  )
}

export default Header;