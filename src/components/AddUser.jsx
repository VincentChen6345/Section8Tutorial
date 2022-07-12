import React from "react";
import "./AddUser.css";
import NameInput from "./functionality/NameInput";
import AgeInput from "./functionality/AgeInput";
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className="form-section">
      <form>
        <NameInput />
        <AgeInput />
        <button className="addUser_btn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
