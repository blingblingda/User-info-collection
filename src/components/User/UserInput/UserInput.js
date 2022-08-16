import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState("");

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const userData = { userName: enteredUserName, userAge: enteredUserAge };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({ title: "Invalid input", message: "invalid input" });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({ title: "Invalid age", message: "invalid age" });
      return;
    }
    props.onSaveUserData(userData);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={userAgeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
