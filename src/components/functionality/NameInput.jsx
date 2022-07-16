import React, { useState } from "react";
import "./NameInput.css";

const NameInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    // console.log(enteredName);
    /*why is there a 1 letter delay */
    props.onAddName(enteredName);
  };

  return (
    <div className="NameInput__container">
      <label className="label">Username</label>
      <input
        className="input"
        type="text"
        onChange={nameChangeHandler}
        value={enteredName}
        disabled={props.isValid ? null : "disabled"}
      ></input>
    </div>
  );
};

export default NameInput;
