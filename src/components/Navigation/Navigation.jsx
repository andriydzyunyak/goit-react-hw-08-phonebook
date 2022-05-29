import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/authSelectors';
import { Link } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <Link to="/">Главная</Link>
      {isLoggedIn && <Link to="/contacts">Контакты</Link>}
    </nav>
  );
};
