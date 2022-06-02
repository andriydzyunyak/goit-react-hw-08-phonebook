import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/authSelectors';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <Link
        component={NavLink}
        to="/"
        sx={{
          display: 'inline-block',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '20px',
          color: '#ffffff',
          '&:not(:last-child)': { mr: '20px' },
          '&:hover,:focus': { color: '#ffdd00' },
          '&.active': { color: '#ffdd00' },
        }}
      >
        Homepage
      </Link>
      {isLoggedIn && (
        <Link
          component={NavLink}
          to="/contacts"
          sx={{
            display: 'inline-block',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '20px',
            color: '#ffffff',
            '&:not(:last-child)': { mr: '20px' },
            '&:hover,:focus': { color: '#ffdd00' },
            '&.active': { color: '#ffdd00' },
          }}
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};
