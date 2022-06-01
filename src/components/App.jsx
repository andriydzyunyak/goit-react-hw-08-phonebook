import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { LoaderPage } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchingCurrentUser } from 'redux/Auth/authSelectors';
import * as authOperations from 'redux/Auth/authOperations';
import { PrivateRoute } from 'pages/PrivateRoute';
import { PublicRoute } from 'pages/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <LoaderPage />
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<LoaderPage />}>
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
                  path="register"
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
                  path="contacts"
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
      )}
    </>
  );
};
