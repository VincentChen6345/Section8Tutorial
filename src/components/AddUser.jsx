import React from "react";
import "./AddUser.css";
import NameInput from "./functionality/NameInput";
import AgeInput from "./functionality/AgeInput";
import "./AddUser.css";

const AddUser = (props) => {
  let newUserName;
  let newAge;
  const submitHandler = (e) => {
    e.preventDefault();

    const newUserData = { Name: newUserName, Age: newAge, id: Math.random() };
    props.onAddUser(newUserData);
  };
  const addNameHandler = (userName) => {
    // const userData = { Name: userName };
    // console.log(userData);
    newUserName = userName;
    return newUserName;
  };
  const addAgeHandler = (age) => {
    newAge = age;
    return newAge;
  };

  return (
    <div className="form-section">
      <form onSubmit={submitHandler}>
        <NameInput onAddName={addNameHandler} />
        <AgeInput onAddAge={addAgeHandler} />
        <button className="addUser_btn" type="submit" onClick={submitHandler}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
