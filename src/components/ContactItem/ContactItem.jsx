import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <ContactPhoneIcon />
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemText primary={number} />
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
