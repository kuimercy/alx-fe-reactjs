
import { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="username" className="text-sm font-medium">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-lg"
          placeholder="Search by username"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="location" className="text-sm font-medium">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-lg"
          placeholder="Search by location"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="minRepos" className="text-sm font-medium">Min. Repositories</label>
        <input
          type="number"
          id="minRepos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded-lg"
          placeholder="Minimum repos"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
