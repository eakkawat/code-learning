import axios from 'axios';

export const fetchUsers = async () => {
  const res = await axios.get('/api/users');
  return res.data;
};

export const createUser = async (user) => {
  const res = await axios.post('/api/users', user);
  return res.data;
};
