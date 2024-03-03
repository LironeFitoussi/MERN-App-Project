import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: "My new goal",
    };
    console.log(newGoal);
    setEnteredText("");
    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input
        type="text"
        value={enteredText}
        placeholder="New Goal"
        onChange={textChangeHandler}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
