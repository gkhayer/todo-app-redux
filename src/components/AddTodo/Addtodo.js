import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import List from "../List/List";

const Addtodo = (props) => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let input = event.target.userInput.value;
          props.dispatch(addTodo(input));
          event.target.userInput.value = "";
        }}
      >
        <input type="text" name="userInput" />
        <button>submit</button>
      </form>
    <List />
    </>
  );
};

export default connect()(Addtodo);
