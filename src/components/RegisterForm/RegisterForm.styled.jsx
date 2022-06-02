import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #f4ff77;
`;

export const PageTitle = styled.h1`
  display: block;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 30px;
`;

export const RegistrationForm = styled(Form)`
  display: block;
  margin: 0 auto;
  border: 1px solid #2a2a2a;
  width: 340px;
  padding: 10px;
  background-color: #a9e8f5;
`;

export const LabelName = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.18;
  display: block;
  margin-bottom: 4px;
`;

export const InputForm = styled(Field)`
  display: block;
  padding: 3px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.18;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  color: #ff0000;
  margin-bottom: 5px;
`;
