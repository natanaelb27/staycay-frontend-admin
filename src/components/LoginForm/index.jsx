import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showErrorToast } from '../../helpers/Toast';
import Label from '../common/Label';
import Input from '../common/Input';
import Button from '../common/Button';
import ErrorMessage from '../common/ErrorMessage';
import { useLoginMutation } from '../../store/slices/apiSlice';
import {
  TitleContainer,
  Title,
  MainContainer,
  Form,
  MainInputContainer,
  InputContainer,
} from './style';

function LoginForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [errorInput, setErrorInput] = useState({
    errorEmail: '',
    errorPassword: '',
  });

  const [login] = useLoginMutation();

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorInput({
      errorEmail: '',
      errorPassword: '',
    });

    const newError = {
      errorEmail: '',
      errorPassword: '',
    };

    if (!input.email) {
      newError.errorEmail = 'Please insert your email';
    }

    if (!input.password) {
      newError.errorPassword = 'Please insert your password';
    }

    setErrorInput(newError);

    if (!newError.errorEmail && !newError.errorPassword) {
      login({
        email: input.email,
        password: input.password,
      })
        .unwrap()
        .then((payload) => {
          if (payload.data.role.toLowerCase() === 'admin') {
            localStorage.setItem('admin', JSON.stringify(payload.data));
            navigate('/', { replace: true });
          } else {
            showErrorToast('credential error');
          }
        })
        .catch((error) => {
          if (!error.data) {
            showErrorToast('Server is currently down, please try again later!');
          }
          showErrorToast(error.data.message);
        });
    }
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <TitleContainer>
          <Title>
            Login
          </Title>
        </TitleContainer>
        <MainInputContainer>

          <InputContainer>
            <Label labelFor="email">Email</Label>
            <Input
              inputType="text"
              inputID="email"
              inputName="email"
              inputValue={input.email}
              handleChange={handleInputChange}
            />
            {errorInput.errorEmail ? <ErrorMessage>{errorInput.errorEmail}</ErrorMessage> : null}
          </InputContainer>
          <InputContainer>
            <Label labelFor="password">Password</Label>
            <Input
              inputType="password"
              inputID="password"
              inputName="password"
              inputValue={input.password}
              handleChange={handleInputChange}
            />
            {errorInput.errorPassword
              ? <ErrorMessage>{errorInput.errorPassword}</ErrorMessage> : null}

          </InputContainer>
          <Button btnType="submit">Login</Button>
        </MainInputContainer>
      </Form>
    </MainContainer>
  );
}

export default LoginForm;
