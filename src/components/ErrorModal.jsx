import React from "react";
import "./ErrorModal.css";
const ErrorModal = (props) => {
  return (
    <div className={props.modalClassName}>
      <span className="modal-title">Invalid Input</span>
      <p className="modal-text">
        Please enter a valid name and age (non-empty values)
      </p>
      <div className="button-container">
        <button className="btn okay">Okay</button>
      </div>
    </div>
  );
};
export default ErrorModal;
