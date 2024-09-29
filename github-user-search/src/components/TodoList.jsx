import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { getTodos, deleteTodo } from '../services/todoService';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  const handleDelete = (id) => {
    deleteTodo(id).then(() => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    });
  };

  const handleUpdate = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

