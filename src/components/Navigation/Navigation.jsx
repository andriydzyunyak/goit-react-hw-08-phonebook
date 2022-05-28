import { Link } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/movies">Заметки</Link>
    </nav>
  );
};
