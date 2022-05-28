import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavBar } from 'components/AppBar/AppBar.styled';

export const AppBar = () => {
  return (
    <NavBar>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </NavBar>
  );
};
