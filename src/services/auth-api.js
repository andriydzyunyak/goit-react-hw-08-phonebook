import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = async values => {
  const { data } = await axios.post('/users/signup', values);
  return data;
};

export const loginUser = async values => {
  const { data } = await axios.post('/users/login', values);
  return data;
};

export const logoutUser = async () => {
  await axios.post('/users/logout');
  return;
};

export const fetchCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
