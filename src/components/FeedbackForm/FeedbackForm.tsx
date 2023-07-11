import React, {useContext} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ContactsContainer, Form, FormLegend, MessageTextarea, SubmitButton} from './StyledFeedbackForm';
import {GlobalContext} from '../../context/GlobalContext';
import {BaseInput, ErrorMessage, Label} from '../UI/Input/InputStyled';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from '../../utils/schemas/FeedbackFormValidation';
interface Inputs {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const {theme} = useContext(GlobalContext);

  const onSubmit: SubmitHandler<Inputs> = ({name, email, phone, notes}) => {
    return console.log(name, email, phone, notes);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormLegend>
        Если у тебя остались вопросы, можешь задать мне их здесь, в форме для обраной связи. Просто заполни поля и нажми
        кнопку отправить:
      </FormLegend>
      <Label>
        <BaseInput theme={theme} placeholder="ФИО" type="text" {...register('name')} />
        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
      </Label>
      <ContactsContainer>
        <Label>
          <BaseInput theme={theme} placeholder="Email" type="email" {...register('email')} />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        </Label>
        <Label>
          <BaseInput theme={theme} placeholder="Номер телефона" type="phone" {...register('phone')} />
          {errors.phone && <ErrorMessage>{errors.phone?.message}</ErrorMessage>}
        </Label>
      </ContactsContainer>
      <MessageTextarea theme={theme} placeholder="Введите пожалуйста Ваш вопрос.." {...register('notes')} />
      <SubmitButton type="submit">Отправить</SubmitButton>
    </Form>
  );
}
