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
        minWidth: '100%',
        height: '100vh',
        margin: '0 auto',
        paddingTop: 2,
        backgroundColor: '#f4ff77',
      }}
    >
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactList />
    </Box>
  );
}
