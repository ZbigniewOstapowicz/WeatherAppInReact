import React from "react";
import './Info.css'
const Info = props => {
  return (
    <div className="info">
      <i className={` info__icon wi ${props.icon}`}></i>
      <span className='info__text'>{props.text}</span>
    </div>
  );
};

export default Info;
