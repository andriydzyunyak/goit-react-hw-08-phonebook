import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const PhonebookForm = styled(Form)`
  border: 1px solid #2a2a2a;
  width: 340px;
  padding: 10px;
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
    margin-bottom: 20px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.18;
  letter-spacing: 0.03em;
  color: #ff0000;
  margin-top: 5px;
  margin-bottom: 20px;
`;