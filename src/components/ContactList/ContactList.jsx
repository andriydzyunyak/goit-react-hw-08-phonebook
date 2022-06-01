import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsReducer';
import * as contactsOperations from 'redux/contactsOperations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { LoaderContact } from 'components/Loader/Loader';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const deleteItem = async id => {
    await dispatch(contactsOperations.deleteContact(id));
    dispatch(contactsOperations.fetchContacts());
  };

  const contactsList = filteredContacts();

  return (
    <Box
      sx={{
        width: 360,
        display: 'block',
        margin: '0 auto',
      }}
    >
      {items.length !== 0 ? (
        <>
          <Filter />
          <ul>
            {contactsList.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDelete={() => deleteItem(id)}
              />
            ))}
          </ul>
          <LoaderContact />
        </>
      ) : (
        <Alert severity="info">There is no contact!</Alert>
      )}
    </Box>
  );
};
