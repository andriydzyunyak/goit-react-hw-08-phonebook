import { useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/Auth/authOperations';
// import {
//   SectionContainer,
//   FormTitle,
//   ContactTitle,
// } from 'components/Section.styled';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
    // <>
    //   <SectionContainer>
    //     <FormTitle>Phonebook</FormTitle>
    //     <ContactForm />
    //     <ContactTitle>Contacts</ContactTitle>
    //     <ContactList />
    //   </SectionContainer>
    // </>
  );
};
