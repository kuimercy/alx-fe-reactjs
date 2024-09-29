import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const searchUsers = (query) => {
  return axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
    params: { q: query },
    headers: {
      Authorization: `token ${process.env.VITE_GITHUB_API_KEY}`
    }
  });
};
