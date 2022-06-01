import { Link } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
