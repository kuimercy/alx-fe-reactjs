
import axios from 'axios';

const API_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = '';
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  try {
    const response = await axios.get(`${API_URL}${query}`);
    return response.data.items; // GitHub Search API returns results in 'items'
  } catch (error) {
    throw error;
  }
};
