import React, {useContext} from 'react';
import {
  ContactsContainer,
  EmailInput,
  Form,
  FormLegend,
  MessageTextarea,
  NameInput,
  PhoneInput,
  SubmitButton,
} from './StyledFeedbackForm';
import {GlobalContext} from '../../context/GlobalContext';

export default function FeedbackForm() {
  const {theme} = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Form>
      <FormLegend>
        Если у тебя остались вопросы, можешь задать мне их здесь, в форме для обраной связи. Просто заполни поля и нажми
        кнопку отправить:
      </FormLegend>
      <NameInput theme={theme} placeholder="ФИО" type="text" />
      <ContactsContainer>
        <EmailInput theme={theme} placeholder="Email" type="email" />
        <PhoneInput theme={theme} placeholder="Номер телефона" type="tel" />
      </ContactsContainer>
      <MessageTextarea theme={theme} placeholder="Введите Ваш вопрос.." />
      <SubmitButton type="submit" onClick={handleSubmit}>
        Отправить
      </SubmitButton>
    </Form>
  );
}
