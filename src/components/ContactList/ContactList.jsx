import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsReducer';
import * as contactsOperations from 'redux/contactsOperations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  ContactBook,
  NoContactMsg,
} from 'components/ContactList/ContactList.styled';
import { Filter } from 'components/Filter/Filter';
import { LoaderContact } from 'components/Loader/Loader';

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
    <>
      {items.length !== 0 ? (
        <>
          <Filter />
          <ContactBook>
            {contactsList.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDelete={() => deleteItem(id)}
              />
            ))}
          </ContactBook>
          <LoaderContact />
        </>
      ) : (
        <NoContactMsg>There is no contact!</NoContactMsg>
      )}
    </>
  );
};
