import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/Auth/authOperations';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
// import { useState } from 'react';
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

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.login(values));
    resetForm();
  };

  return (
    <div>
      <h1>Страница входа</h1>
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" required />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
