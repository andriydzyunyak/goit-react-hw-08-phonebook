import { Link } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </nav>
  );
};
