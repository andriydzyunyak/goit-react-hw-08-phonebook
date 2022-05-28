import { Formik } from 'formik';
import * as yup from 'yup';
// import {
//   InputForm,
//   LabelName,
//   SubmitButton,
//   PhonebookForm,
//   ErrorText,
// } from 'components/ContactForm/ContactForm.styled';

const initialState = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const LoginPage = () => {
  const handleSubmit = (values, { resetForm }) => {
    //  contact(values);
    resetForm();
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <form autoComplete="off">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required />
          {/* <ErrorText name="name" component="div" /> */}
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          {/* <ErrorText name="phone" component="div" /> */}
          <button type="submit">Login</button>
        </form>
      </Formik>
    </div>
  );
};
