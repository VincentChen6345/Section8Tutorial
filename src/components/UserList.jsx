import React from "react";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="UserList-section">
      <div>
        {props.userList.map((userItem) => (
          <span className="user-tile" key={userItem.id}>
            {userItem.Name} ({userItem.Age} years old)
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserList;
