import { combineReducers, createReducer, createAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as contactsOperations from 'redux/Contacts/contactsOperations';
import {
  fetchContacts,
  addUniqueContact,
  deleteContact,
} from './contactsOperations';
import { getContacts } from 'redux/Contacts/contactsSelectors';

//Actions
export const onChangeFilter = createAction('contacts/onChangeFilter');

//Reducers
const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addUniqueContact.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact.fulfilled]: (state, action) => {
    state = state.filter(contact => contact.contactId !== action.payload);
  },
});

const filter = createReducer('', {
  [onChangeFilter]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addUniqueContact.pending]: () => true,
  [deleteContact.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [addUniqueContact.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addUniqueContact.rejected]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  isLoading,
});

//Hooks
export const useAddContacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContact = values => {
    const nameNormalized = values.name.toLowerCase();
    const uniqueName = contacts.find(
      contact => contact.name.toLowerCase() === nameNormalized
    );

    if (uniqueName) {
      toast.warn(`${values.name} is already in contacts`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored',
      });
    } else {
      dispatch(contactsOperations.addUniqueContact(values));
    }
  };
  return { contact: addContact };
};
