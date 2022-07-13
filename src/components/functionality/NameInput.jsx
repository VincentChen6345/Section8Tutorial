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
      ></input>
    </div>
  );
};

export default NameInput;

/*Notes to pickup on 
1. when username input is submitted, data is passed up the state into AddUser.jsx,
2. together with the age input, it creates a new object which is added to userList
3. userList gets re-rendered
*/
