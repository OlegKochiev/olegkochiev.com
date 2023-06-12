'use client';

import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';
import AuthFormSchema from '../../utils/schemas/AuthValidation';

import MyImage from '../../components/Home/MyImage';
import Input from '../../components/UI/Input/Input';
import {Button, Container, Form, Title} from './SigninStyled';

interface IAuthFormInputs {
  email: string;
  password: string;
}

const SingIn = () => {
  const form = useForm<IAuthFormInputs>({
    resolver: yupResolver(AuthFormSchema),
  });

  const router = useRouter();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    console.log(res);

    if (res && !res.error) {
      router.push('/admin');
    }
  };

  // const onSubmit = (data: IAuthFormInputs) => console.log(data);

  return (
    <Container>
      <FormProvider {...form}>
        <Form onSubmit={handleSubmit}>
          <Title>Привет</Title>
          <MyImage width="80px" />
          <Input name="email" title="Email" type="email" autoComplete="email" />
          <Input name="password" title="Пароль" type="password" autoComplete="current-password" />
          <Button type="submit">Войти</Button>
        </Form>
      </FormProvider>
    </Container>
  );
};

export default SingIn;
