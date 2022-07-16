import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import "./App.css";
import userData from "./data/TaskData";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [userList, setUserList] = useState(userData);
  const [isValid, setIsValid] = useState(true);
  const addUserHandler = (user) => {
    console.log(user);
    if (user["Name"].trim().length === 0 || user["Age"].trim().length === 0) {
      setIsValid(false);
      return;
    }
    setUserList((prevUserList) => {
      const updatedUserList = [user, ...prevUserList];
      return updatedUserList;
    });
  };
  /*clicking the okay button to remove modal  */
  const removeModalHandler = () => {
    setIsValid(true);
    return;
  };

  let modalClassName = "modal-container hidden";
  let overlayClassName = "overlay hidden";
  if (isValid === false) {
    modalClassName = "modal-container";
    overlayClassName = "overlay ";
  } else {
    modalClassName += " hidden";
    overlayClassName = "overlay hidden";
  }
  /* Escape key handler*/

  const keyDownHandler = (e) => {
    if (e.key === "Escape") {
      removeModalHandler();
    }
  };
  document.addEventListener("keydown", keyDownHandler);
  return (
    <div className="App">
      <div className="main-container">
        <AddUser onAddUser={addUserHandler} isValid={isValid} />
        <ErrorModal
          modalClassName={modalClassName}
          isValid={isValid}
          removeModal={removeModalHandler}
        ></ErrorModal>
        <UserList userList={userList} />
        <div className={overlayClassName}></div>
      </div>
    </div>
  );
}

export default App;

/*Bug!
my useState user input is always 1 step behind when i log the data. e.g. if i type 'hello', it gets saved as 'hell'
 */

/*
Successfully lifted data from AgeInput and NameInput.jsx into AddUser.jsx, then created new user object, then lifted the object into App.jsx where i update the userList and pass it into UserList.jsx to be rendered
*/

/* Things to pick on
1. create an error modal window with error message that changes depending on the conditions
2. if either username input or age input is empty, display error modal
3. if age input is negative, display error modal with different messsage
4. Click escape or background to delete error modal (done by using dynamic classes e.g. display:hidden)*/
