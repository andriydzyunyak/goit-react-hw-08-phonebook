import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/authSelectors';
import { NavBar } from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavBar>
  );
};
