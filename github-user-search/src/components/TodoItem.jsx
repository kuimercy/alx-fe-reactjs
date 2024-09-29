
import { useState } from 'react';
import { updateTodo } from '../services/todoService';

function TodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleUpdate = () => {
    const updatedTodo = { ...todo, task: editedTask };
    updateTodo(updatedTodo).then(() => {
      onUpdate(updatedTodo);
      setIsEditing(false);
    });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        todo.task
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
}

export default TodoItem;

