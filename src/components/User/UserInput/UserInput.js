import React, { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const [error, setError] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const userData = { userName: enteredName, userAge: enteredAge };
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Invalid input", message: "invalid input" });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid age", message: "invalid age" });
      return;
    }
    props.onSaveUserData(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
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
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UserInput;
