import React, { useState } from "react";
import "./AgeInput.css";
const AgeInput = (props) => {
  const [age, setAge] = useState("");
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
    props.onAddAge(age);
  };
  return (
    <div className="AgeInput__container">
      <label className="label">Age(Years)</label>
      <input className="input" type="text" onChange={ageChangeHandler}></input>
    </div>
  );
};

export default AgeInput;
