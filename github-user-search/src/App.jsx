import { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import SearchResults from './components/SearchResults';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await fetchUserData(searchParams);
      setUsers(userData);
    } catch (err) {
      setError("Looks like we can't find any users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <h1 className="text-center text-3xl font-bold mb-6">GitHub User Search</h1>
        
        <Search onSearch={handleSearch} />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <SearchResults users={users} />
        
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

