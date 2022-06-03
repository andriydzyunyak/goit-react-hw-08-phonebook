import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/contactsSelectors';
import * as contactsReducer from 'redux/Contacts/contactsReducer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(contactsReducer.onChangeFilter(evt.currentTarget.value));
  };

  return (
    <Box
      sx={{
        width: 340,
        margin: '0 auto',
        backgroundColor: '#c7f0f8',
      }}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Find contacts by name"
        value={filter}
        onChange={changeFilter}
      />
    </Box>
  );
};
