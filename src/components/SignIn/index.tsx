'use client';

import React, {useContext} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';
import AuthFormSchema from '../../utils/schemas/AuthValidation';

import MyImage from '../../components/Home/MyImage';
import {ButtonLeft, Container, Form, Title} from './SigninStyled';
import {BaseInput} from '../UI/Input/InputStyled';

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
          <BaseInput name="email" placeholder="Email" title="Email" type="email" autoComplete="email" />
          <BaseInput
            name="password"
            placeholder="Password"
            title="Пароль"
            type="password"
            autoComplete="current-password"
          />
          <ButtonLeft type="submit">Войти</ButtonLeft>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default SingIn;
