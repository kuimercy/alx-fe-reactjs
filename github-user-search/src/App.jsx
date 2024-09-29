import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
function App() {
  return (
    <Router>
<div className="app-container">
  <Routes>
  <Route path="/" element={<TodoList />} />
          <Route path="/add-todo" element={<AddTodo />} />

  </Routes>
</div>
    </Router>
 );
}

export default App;
