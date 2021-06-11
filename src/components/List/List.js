import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions";

const List = (props) => {
 

  return (
    <ul>
      {props.todos_anyname.map((item, index) => (
        <li key={index}>
          {item.message}
          <button onClick={() => props.dispatch(deleteTodo(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// mapStateToProps is to access the state
const mapStateToProps = (state) => ({
  todos_anyname: state.todos.data,
});

export default connect(mapStateToProps)(List);
