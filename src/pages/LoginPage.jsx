import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/Auth/authOperations';
//import { register } from 'redux/Auth/authOperations';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { useState } from 'react';
// import {
//   InputForm,
//   LabelName,
//   SubmitButton,
//   PhonebookForm,
//   ErrorText,
// } from 'components/ContactForm/ContactForm.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница входа</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
