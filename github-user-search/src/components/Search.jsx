
// Search.jsx
import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchParams = {
      username,
      location,
      minRepos,
    };
    onSearch(searchParams);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Minimum Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
