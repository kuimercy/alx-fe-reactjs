
import { useState } from 'react';
import Search from './Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await fetchUserData(searchParams);
      setUsers(userData);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      
      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      {users.length > 0 && (
        <div className="grid grid-cols-1 gap-4 mt-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h2 className="text-lg font-bold">{user.login}</h2>
                  {user.location && <p>Location: {user.location}</p>}
                  <p>Repositories: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {users.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
