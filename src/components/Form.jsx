import React from "react";
import './Form.css'

const Form = props => {
  return (
    <form className='form' onSubmit={props.submit}>
      <input
      className='form__input'
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Enter city"
      />
      <button className='form__btn'>Search city</button>
    </form>
  );
};

export default Form;
