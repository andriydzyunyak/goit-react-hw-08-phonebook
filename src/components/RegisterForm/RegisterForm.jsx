import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/Auth/authOperations';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  PageTitle,
  InputForm,
  LabelName,
  RegistrationForm,
  ErrorText,
} from 'components/RegisterForm/RegisterForm.styled';
import Button from '@mui/material/Button';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  return (
    <FormContainer>
      <PageTitle>Registration form</PageTitle>
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <RegistrationForm autoComplete="off">
          <LabelName htmlFor="name">Name</LabelName>
          <InputForm
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <ErrorText name="name" component="div" />
          <LabelName htmlFor="email">Email</LabelName>
          <InputForm
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <ErrorText name="email" component="div" />
          <LabelName htmlFor="password">Password</LabelName>
          <InputForm
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
          <ErrorText name="password" component="div" />
          <Button variant="contained" size="small" type="submit">
            Register
          </Button>
        </RegistrationForm>
      </Formik>
    </FormContainer>
  );
};
