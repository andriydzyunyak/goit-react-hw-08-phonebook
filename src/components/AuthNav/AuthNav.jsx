import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const AuthNav = () => {
  return (
    <Box>
      <Link
        component={NavLink}
        to="/register"
        sx={{
          display: 'inline-block',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '20px',
          color: '#ffffff',
          '&:not(:last-child)': { mr: '20px' },
          '&.active': { color: '#ffdd00' },
        }}
      >
        Registration
      </Link>
      <Link
        component={NavLink}
        to="/login"
        sx={{
          display: 'inline-block',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '20px',
          color: '#ffffff',
          '&:not(:last-child)': { mr: '20px' },
          '&.active': { color: '#ffdd00' },
        }}
      >
        Login
      </Link>
    </Box>
  );
};
