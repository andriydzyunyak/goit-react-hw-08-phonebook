import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
