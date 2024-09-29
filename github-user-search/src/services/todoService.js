// Mock API calls or integrate with a real API

const todos = [
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build Todo App', completed: false }
  ];
  
  // Simulate fetching todos from an API
  export const getTodos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(todos);
      }, 1000);
    });
  };
  
  // Simulate adding a new todo
  export const addTodo = (newTodo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        todos.push({ id: todos.length + 1, ...newTodo });
        resolve(newTodo);
      }, 500);
    });
  };
  
  // Simulate updating a todo
  export const updateTodo = (updatedTodo) => {
    return new Promise((resolve) => {
      const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        todos[index] = updatedTodo;
      }
      setTimeout(() => {
        resolve(updatedTodo);
      }, 500);
    });
  };
  
  // Simulate deleting a todo
  export const deleteTodo = (id) => {
    return new Promise((resolve) => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
      }
      setTimeout(() => {
        resolve(id);
      }, 500);
    });
  };
  