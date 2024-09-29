

const SearchResults = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {users.map((user) => (
        <div key={user.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
          <h3 className="text-lg font-semibold text-center mt-2">{user.login}</h3>
          <p className="text-sm text-gray-600 text-center">{user.location || 'Unknown Location'}</p>
          <p className="text-sm text-gray-600 text-center">Repos: {user.public_repos || 0}</p>
          <a href={user.html_url} className="block text-center text-blue-500 mt-2">View Profile</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
