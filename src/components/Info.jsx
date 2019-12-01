import React from "react";
const Info = props => {
  return (
    <div className="info">
      <i className={`wi ${props.icon}`}></i>
      <span>{props.text}</span>
    </div>
  );
};

export default Info;
