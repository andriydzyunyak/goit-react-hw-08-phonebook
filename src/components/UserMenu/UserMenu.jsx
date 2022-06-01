import {
  UserMenuContainer,
  UserName,
  Button,
} from 'components/UserMenu/UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/authSelectors';
import * as authOperations from 'redux/Auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <UserMenuContainer>
      <UserName>Welcome, {name}!</UserName>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};
