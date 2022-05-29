import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
