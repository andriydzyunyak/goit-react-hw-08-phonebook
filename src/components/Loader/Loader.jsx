import { useSelector } from 'react-redux';
import { isLoadingContact } from 'redux/Contacts/contactsSelectors';
import { getFetchingCurrentUser } from 'redux/Auth/authSelectors';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';

export const LoaderPage = () => {
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Fade in={isFetchingCurrentUser} unmountOnExit>
        <CircularProgress
          size={60}
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
          }}
        />
      </Fade>
    </Box>
  );
};

export const LoaderContact = () => {
  const isLoading = useSelector(isLoadingContact);

  return (
    <Box sx={{ height: 40, display: 'flex', justifyContent: 'center' }}>
      <Fade in={isLoading} unmountOnExit>
        <CircularProgress size={60} />
      </Fade>
    </Box>
  );
};
