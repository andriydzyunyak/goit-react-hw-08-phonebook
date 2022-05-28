import { Link } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </div>
  );
};
