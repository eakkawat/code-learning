import axios from 'axios';
import { User } from '@/types/user';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

export const fetchUsers = async () => {
  const res = await axiosInstance.get('/api/v1/users');
  return res.data;
};

export const createUser = async (user: User) => {
  const res = await axiosInstance.post('/api/v1/users', user);
  return res.data;
};
