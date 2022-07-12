import React from "react";
import "./AgeInput.css";
const AgeInput = () => {
  return (
    <div className="AgeInput__container">
      <label className="label">Age(Years)</label>
      <input className="input" type="text"></input>
    </div>
  );
};

export default AgeInput;
