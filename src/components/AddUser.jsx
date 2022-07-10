import React from "react";
import "./AddUser.css";
import NameInput from "./functionality/NameInput";
import AgeInput from "./functionality/AgeInput";

const AddUser = () => {
  return (
    <div className="form-section">
      <form>
        <NameInput />
        <AgeInput />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
