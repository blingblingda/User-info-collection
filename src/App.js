import React, { useState } from "react";
import UserInput from "./components/User/UserInput/UserInput";
import UserList from "./components/User/UserList/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userDataEntered) => {
    setUserList((prevUserList) => {
      const updatedUserList = [...prevUserList];
      updatedUserList.unshift({
        id: Math.random().toString(),
        ...userDataEntered,
      });
      return updatedUserList;
    });
  };

  return (
    <React.Fragment>
      <UserInput onSaveUserData={addUserHandler} />
      <UserList users={userList} />
    </React.Fragment>
  );
};

export default App;
