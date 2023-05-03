import React, {useContext} from 'react';
import {
  ContactsContainer,
  StyledEmailInput,
  StyledFeedbackForm,
  StyledFormLegend,
  StyledMessageTextarea,
  StyledNameInput,
  StyledPhoneInput,
  StyledSubmitButton,
} from './StyledFeedbackForm';
import {GlobalContext} from '../../context/GlobalContext';

export default function FeedbackForm() {
  const {theme} = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <StyledFeedbackForm>
      <StyledFormLegend>
        Если у тебя остались вопросы, можешь задать мне их здесь, в форме для обраной связи. Просто заполни поля и нажми
        кнопку отправить:
      </StyledFormLegend>
      <StyledNameInput theme={theme} placeholder="ФИО" />
      <ContactsContainer>
        <StyledEmailInput theme={theme} placeholder="Email" />
        <StyledPhoneInput theme={theme} placeholder="Номер телефона" />
      </ContactsContainer>
      <StyledMessageTextarea theme={theme} placeholder="Введите Ваш вопрос.." />
      <StyledSubmitButton type="submit" onClick={handleSubmit}>
        Отправить
      </StyledSubmitButton>
    </StyledFeedbackForm>
  );
}
