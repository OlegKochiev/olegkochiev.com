import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import Header from '../../components/Header';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: inherit;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Login = styled(Input).attrs({
  type: 'text',
})``;

const Password = styled(Input).attrs({
  type: 'password',
})``;

const Label = styled.label`
  width: 100%;
  font-size: 11px;
  text-transform: uppercase;
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
  align-self: flex-end;
  width: 80px;
  height: 30px;
  background-color: #ccc;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    color: white;
    background-color: #078080;
  }
`;

const Auth = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Form>
          <Title>Авторизация</Title>
          <Label>
            Логин
            <Login />
          </Label>
          <Label>
            Пароль
            <Password />
          </Label>
          <Button>Войти</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default Auth;
