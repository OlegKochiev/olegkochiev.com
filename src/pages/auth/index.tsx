import React from 'react';
import FormField from '../../components/Auth/FormField';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import AuthFormSchema from '../../utils/schemas/AuthValidation';
import styled from 'styled-components';

interface IAuthFormInputs {
  login: string;
  password: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 350px;
  height: 400px;
  padding: 40px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 22px;
  align-self: center;
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
  align-self: flex-end;
  width: 80px;
  height: 30px;
  background-color: #ccc;
  transition: background-color 0.1s, color 0.1s;
  outline: transparent;
  &:hover {
    color: white;
    background-color: #078080;
  }
  &:focus {
    outline: 1px solid #078080;
  }
`;

const Auth = () => {
  const form = useForm<IAuthFormInputs>({
    resolver: yupResolver(AuthFormSchema),
  });

  const onSubmit = (data: IAuthFormInputs) => console.log(data);

  return (
    <Container>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Title>Авторизация</Title>
          <FormField name="login" fieldType="text" title="Логин" />
          <FormField name="password" fieldType="password" title="Пароль" />
          <Button>Войти</Button>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default Auth;
