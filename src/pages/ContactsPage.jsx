import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import * as contactsOperations from 'redux/contactsOperations';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SectionContainer, ContactTitle } from 'components/Section.styled';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <>
      <SectionContainer>
        {/* <FormTitle>Phonebook</FormTitle> */}
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <ContactList />
      </SectionContainer>
    </>
  );
};
