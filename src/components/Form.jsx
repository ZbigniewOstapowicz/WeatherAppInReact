import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Wpisz miasto"
      />
      <p>{props.value}</p>
      <button>Wyszukaj miasta</button>
    </form>
  );
};

export default Form;
