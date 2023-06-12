import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: inherit;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Button = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
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

export {Container, Form, Title, Button};
