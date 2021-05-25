import React from 'react';
import './style.scss';

const ScrollDown = ({ text, style }) => {
  return (
    <div className="scroll-down" style={style}>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <span className="text">{text}</span>
    </div>
  );
};

export default ScrollDown;
