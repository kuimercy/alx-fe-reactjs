import { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we can't find the user.");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <h1 className="text-center text-3xl font-bold mb-6">GitHub User Search</h1>
        
        {/* GitHub User Search Section */}
        <Search onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {user && (
          <div className="user-profile">
            <img src={user.avatar_url} alt={user.login} width="100" />
            <h2>{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        )}
        
        {/* Todo App Section */}
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

