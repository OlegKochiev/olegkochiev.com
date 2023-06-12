'use client';

import React, {useContext} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';
import AuthFormSchema from '../../utils/schemas/AuthValidation';

import MyImage from '../../components/Home/MyImage';
import Input from '../../components/UI/Input/Input';
import {ButtonLeft, Container, Form, Title} from './SigninStyled';

interface IAuthFormInputs {
  email: string;
  password: string;
}

const SingIn = () => {
  const form = useForm<IAuthFormInputs>({
    resolver: yupResolver(AuthFormSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: IAuthFormInputs) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res && !res.error) {
      router.push('/admin');
    }
  };

  return (
    <Container>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <Title>Привет</Title>
          <MyImage width="80px" />
          <Input name="email" title="Email" type="email" autoComplete="email" />
          <Input name="password" title="Пароль" type="password" autoComplete="current-password" />
          <ButtonLeft type="submit">Войти</ButtonLeft>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default SingIn;
