import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAddContacts } from 'redux/Contacts/contactsReducer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const schema = yup.object().shape({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup
    .string('Enter your number')
    .min(7, 'Number should be of minimum 7 numbers length')
    .required('Number is required'),
});

export const ContactForm = () => {
  const { contact } = useAddContacts();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      contact(values);
      resetForm();
    },
  });

  return (
    <Box
      sx={{
        width: 340,
        margin: '0 auto',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{
            mb: '10px',
            backgroundColor: '#c7f0f8',
          }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          required
        />

        <TextField
          sx={{
            mb: '10px',
            backgroundColor: '#c7f0f8',
          }}
          fullWidth
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          type="tel"
          required
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </Box>
  );
};
