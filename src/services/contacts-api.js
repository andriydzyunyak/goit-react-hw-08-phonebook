import axios from 'axios';

//axios.defaults.baseURL = 'https://6282c94592a6a5e46219baa9.mockapi.io';
//axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async values => {
  const { data } = await axios.post('/contacts', values);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
