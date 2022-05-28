import { Link } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/contacts">Контакты</Link>
    </nav>
  );
};
