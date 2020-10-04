import React from "react";

const SkillBar = props => {
  const { amount, text } = props;

  const percentage = `${amount}%`;

  return (
    <div className="skillbar">
      <div className="skillbar__outer">
        <div className="skillbar__inner" style={{ width: percentage }}>
          <div className="skillbar__text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
