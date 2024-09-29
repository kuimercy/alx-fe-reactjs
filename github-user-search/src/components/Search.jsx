
import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md space-y-4 max-w-lg mx-auto">
      <div className="flex flex-col">
        <label htmlFor="username" className="text-sm font-medium">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
          placeholder="Enter GitHub username"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="location" className="text-sm font-medium">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
          placeholder="Enter location"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="minRepos" className="text-sm font-medium">Minimum Repositories</label>
        <input
          type="number"
          id="minRepos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
          placeholder="Min repositories"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default Search;
