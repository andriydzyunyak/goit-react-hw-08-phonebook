import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAddContacts } from 'redux/contactsReducer';
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
        backgroundColor: '#c7f0f8',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          type="tel"
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </Box>

    // <Box
    //   sx={{
    //     width: 340,
    //     margin: '0 auto',
    //     backgroundColor: '#a9e8f5',
    //   }}
    // >
    //   <Formik
    //     initialValues={initialState}
    //     validationSchema={schema}
    //     onSubmit={handleSubmit}
    //   >
    //     <PhonebookForm autoComplete="off">
    //       <LabelName htmlFor="name">Name</LabelName>
    //       <InputForm
    //         type="text"
    //         name="name"
    //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //         placeholder="Enter your name"
    //         required
    //       />
    //       <ErrorText name="name" component="div" />
    //       <LabelName htmlFor="number">Number</LabelName>
    //       <InputForm
    //         type="tel"
    //         name="number"
    //         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //         placeholder="(000)123-45-67"
    //         required
    //       />
    //       <ErrorText name="number" component="div" />
    //       <Button variant="contained" size="small" type="submit">
    //         Add contact
    //       </Button>
    //     </PhonebookForm>
    //   </Formik>
    // </Box>
  );
};
