import axios from 'axios';

// Define the type for the user object
interface User {
  id?: number;
  name: string;
  email: string;
  // Add other properties as needed
}

export const fetchUsers = async () => {
  const res = await axios.get('/api/users');
  return res.data;
};

export const createUser = async (user: User) => {
  const res = await axios.post('/api/users', user);
  return res.data;
};
