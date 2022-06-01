import axios from 'axios';

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
