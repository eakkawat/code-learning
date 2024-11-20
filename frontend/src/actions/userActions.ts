import axios from 'axios';
import { User } from '../types/User';

export const fetchUsers = async () => {
  const res = await axios.get('/api/users');
  return res.data;
};

export const createUser = async (user: User) => {
  const res = await axios.post('/api/users', user);
  return res.data;
};
