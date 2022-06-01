import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as contactsOperations from 'redux/contactsOperations';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactTitle } from 'components/Section.styled';
import Box from '@mui/material/Box';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'block',
        margin: '0 auto',
        padding: 2,
        backgroundColor: '#f4ff77',
      }}
    >
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactList />
    </Box>
  );
}
