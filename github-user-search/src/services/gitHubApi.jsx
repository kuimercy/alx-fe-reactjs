import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const searchUsers = ({ username, location, minRepos }) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  return axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
    params: { q: query },
    headers: {
      Authorization: `token ${process.env.VITE_GITHUB_API_KEY}` // Optional for rate limits
    }
  });
};
