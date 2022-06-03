import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as contactsOperations from 'redux/Contacts/contactsOperations';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
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
      <Box
        component="h2"
        sx={{
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: 1.4,
          mt: '25px',
          mb: '20px',
          textAlign: 'center',
        }}
      >
        Contacts
      </Box>
      <ContactList />
    </Box>
  );
}
