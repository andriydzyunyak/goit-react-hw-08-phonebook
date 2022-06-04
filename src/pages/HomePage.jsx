import Box from '@mui/material/Box';
import phonebookimage from 'image/homepage.jpg';
import mobileimage from 'image/homepage-mobile.jpg';

export default function HomePage() {
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '100vh',
        pt: '60px',
        backgroundColor: '#f4ff77',
      }}
    >
      <Box
        component="h1"
        sx={{
          display: 'block',
          textAlign: 'center',
          mb: '30px',
        }}
      >
        Welcome to our Phonebook service
      </Box>

      <picture>
        <source srcSet={phonebookimage} media="(min-width:768px)" />
        <source srcSet={mobileimage} media="(min-width:320px)" />
        <img alt="phonebookimage" src={mobileimage} />
      </picture>
    </Box>
  );
}
