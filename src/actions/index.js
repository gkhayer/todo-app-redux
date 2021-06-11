const ADD_TODO = 'ADD_TODO'

//create action (create => function)

export const addTodo = (message) => ({
    type: ADD_TODO,  // (type is action name, we can give any name bit recommened is type)
    message, // or message = message or message;  this is payload
    id: Math.random()
});

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => ({
    type: DELETE_TODO,  // (type is action name, we can give any name bit recommened is type)
    id,  // or message = message or message;
});

 
