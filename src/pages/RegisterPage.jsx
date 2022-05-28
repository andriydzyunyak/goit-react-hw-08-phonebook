import { useDispatch } from 'react-redux';
import * as authOperations from '../redux/Auth/authOperations';
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

// const initialState = {
//   name: '',
//   email: '',
//   password: '',
// };

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().required(),
//   password: yup.string().required(),
// });

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const handleSubmit = (values, { resetForm }) => {
  //     dispatch(authOperations.register(values));
  //     //  contact(values);
  //     resetForm();
  //    };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
        <button type="submit">Register</button>
      </form>
      {/* <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <form autoComplete="off">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
          <button type="submit">Register</button>
        </form>
      </Formik> */}
    </div>
  );
};
