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
        <button onClick={props.removeModal} className="btn okay">
          Okay
        </button>
      </div>
    </div>
  );
};
export default ErrorModal;
/*
Handover notes 14/7/22 Thurs
1. when okay button is pressed/when esc key is pressed/when background is clicked --> unlock input fields, remove modal window

*/
