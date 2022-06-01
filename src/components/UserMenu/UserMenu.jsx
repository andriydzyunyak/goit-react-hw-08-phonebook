import {
  UserMenuContainer,
  UserName,
} from 'components/UserMenu/UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/authSelectors';
import * as authOperations from 'redux/Auth/authOperations';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import userAvatar from 'image/avatar.png';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <UserMenuContainer>
      <Avatar alt="current user" src={userAvatar} />

      <UserName>Welcome, {name}!</UserName>
      <Button
        color="info"
        variant="contained"
        size="small"
        type="button"
        endIcon={<LogoutIcon />}
        onClick={() => dispatch(authOperations.logout())}
      >
        Logout
      </Button>
    </UserMenuContainer>
  );
};
