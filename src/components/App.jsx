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
import { useDispatch, useSelector } from 'react-redux';
import { getFetchingCurrentUser } from 'redux/Auth/authSelectors';
import * as authOperations from 'redux/Auth/authOperations';
import { PrivateRoute } from 'pages/PrivateRoute';
import { PublicRoute } from 'pages/PublicRoute';
// import {
//   SectionContainer,
//   FormTitle,
//   ContactTitle,
// } from 'components/Section.styled';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const PrivateRoute = lazy(() => import('../pages/PrivateRoute'));
// const PublicRoute = lazy(() => import('../pages/PublicRoute'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute redirectTo="/">
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
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
