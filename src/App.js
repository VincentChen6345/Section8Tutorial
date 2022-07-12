import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import "./App.css";
import userData from "./data/TaskData";

function App() {
  // const [userList, setUserList] = useState(userData);
  const userList = userData;
  return (
    <div className="App">
      <div className="main-container">
        <AddUser />
        <UserList userList={userList} />
      </div>
    </div>
  );
}

export default App;

/*
1. if you click 'add user' without any input, you get an overlay saying invalid input 
2. If you enter a negative age, you get a different invalid input
3. if you add a valid input, it resets the input fields 

*/
