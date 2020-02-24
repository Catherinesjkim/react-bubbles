// Stage 1 - Authentication
// Build a login form to authenticate my users.
// Construct an AXIOS request to retrieve a token from the server. I'll use this token to interact with the API
import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // config object
    baseURL: 'http://localhost:5000/api',
    headers: {
      authorization: token
    }
  });
};
