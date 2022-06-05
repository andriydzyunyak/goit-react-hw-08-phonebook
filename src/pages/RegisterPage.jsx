import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/Auth/authOperations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const schema = yup.object().shape({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(authOperations.register(values));
      // resetForm();
    },
  });

  return (
    <Box
      sx={{
        minWidth: '100%',
        height: '100vh',
        margin: '0 auto',
        paddingTop: 2,
        backgroundColor: '#f4ff77',
      }}
    >
      <Box
        component="h1"
        sx={{
          display: 'block',
          textAlign: 'center',
          pt: '10px',
          mb: '30px',
        }}
      >
        Registration Form
      </Box>
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
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            type="email"
            required
          />
          <TextField
            sx={{
              mb: '10px',
              backgroundColor: '#c7f0f8',
            }}
            fullWidth
            id="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            type="password"
            required
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
}
