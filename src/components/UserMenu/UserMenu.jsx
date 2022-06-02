import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/authSelectors';
import * as authOperations from 'redux/Auth/authOperations';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import userAvatar from 'image/avatar.png';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar alt="current user" src={userAvatar} />
      <Box
        component="span"
        sx={{
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: 1.18,
          color: '#ffffff',
          ml: '10px',
          mr: '10px',
        }}
      >
        Welcome, {name}!
      </Box>

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
    </Box>
  );
};
