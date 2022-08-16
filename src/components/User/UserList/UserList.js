import React from "react";
import Card from "../../UI/Card/Card";
import UserItem from "../UserItem/UserItem";

import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} name={user.userName} age={user.userAge} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
