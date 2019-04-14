import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>존재하지 않는 페이지 입니다.</h1>
      <h2>404 Not Found</h2>
      <Link to="/">메인 페이지로</Link>
    </div>
  );
};

export default NotFound;
