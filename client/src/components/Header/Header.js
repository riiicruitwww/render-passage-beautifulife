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

  const handleLogoClick = () => {
    onHomeClick();
  };

  const handleNextClick = () => {
    onNextClick();
  };

  return (
    <div className="Header">
      <div className="Header__title">
        <h1 onClick={handleLogoClick}>Santa Toeic</h1>
        <span>{packType ? `(${packType})` : '...Loading'}</span>
      </div>
      <button className="Header__back-btn">돌아가기</button>
      {isCheckComplete ? (
        <button
          className="Header__utility-btn active"
          onClick={handleNextClick}
        >
          다음문제
        </button>
      ) : (
        <button
          className={
            isAnswerComplete
              ? 'Header__utility-btn active'
              : 'Header__utility-btn'
          }
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
