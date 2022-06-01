import { Formik } from 'formik';
import * as yup from 'yup';
import { useAddContacts } from 'redux/contactsReducer';
import {
  InputForm,
  LabelName,
  PhonebookForm,
  ErrorText,
} from 'components/ContactForm/ContactForm.styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const initialState = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export const ContactForm = () => {
  const { contact } = useAddContacts();

  const handleSubmit = (values, { resetForm }) => {
    contact(values);
    resetForm();
  };

  return (
    <Box
      sx={{
        width: 360,
        display: 'block',
        margin: '0 auto',
        backgroundColor: '#a9e8f5',
      }}
    >
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <PhonebookForm autoComplete="off">
          <LabelName htmlFor="name">Name</LabelName>
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name"
            required
          />
          <ErrorText name="name" component="div" />
          <LabelName htmlFor="number">Number</LabelName>
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="(000)123-45-67"
            required
          />
          <ErrorText name="number" component="div" />
          <Button variant="contained" size="small" type="submit">
            Add contact
          </Button>
        </PhonebookForm>
      </Formik>
    </Box>
  );
};
