
import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
      params: { q: query },
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,  // Optional: GitHub token for higher rate limits
      },
    });
    return response.data.items;  // Returns an array of users
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

