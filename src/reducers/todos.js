const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
 // console.log("state is " +state)
  console.log(...state.data)
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state, // first return old state
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id
          }
        ]
      };
    case "DELETE_TODO":
      const newTodoAfterDelete = state.data.filter((data) => data.id !== action.id)
    //  console.log(newTodoAfterDelete)
      return {
        ...state,
        data: newTodoAfterDelete
      };
    default:
      return state;
  }
};


export default todos;