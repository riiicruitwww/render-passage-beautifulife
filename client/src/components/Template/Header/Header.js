import React from 'react';
import './Header.scss';

const Header = ({
  isAnswerComplete,
  isCheckComplete,
  packType,
  onCheckClick,
  onNextClick,
  onHomeClick
}) => {
  const handleCheckClick = () => {
    if (isAnswerComplete) {
      onCheckClick();
    }
  };

  return (
    <div className="Header">
      <div className="Header__title">
        <h1 onClick={onHomeClick}>Santa Toeic</h1>
        <span>{`(${packType || '...Loading'})`}</span>
      </div>
      {isCheckComplete ? (
        <button className="Header__utility-btn active" onClick={onNextClick}>
          다음문제
        </button>
      ) : (
        <button
          className={`Header__utility-btn ${isAnswerComplete ? 'active' : ''}`}
          onClick={handleCheckClick}
          disabled={!isAnswerComplete}
        >
          채점하기
        </button>
      )}
    </div>
  );
};

export default Header;
