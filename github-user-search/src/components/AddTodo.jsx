import  { useState } from 'react';
import { addTodo } from '../services/todoService';

function AddTodo({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTodo = { task, completed: false };
    addTodo(newTodo).then((todo) => {
      onAdd(todo); // Callback to update the list in parent component
      setTask(''); // Clear the input field
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
