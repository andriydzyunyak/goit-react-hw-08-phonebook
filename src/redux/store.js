import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/Auth/authSlice';
import contactsReducer from 'redux/contactsReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
