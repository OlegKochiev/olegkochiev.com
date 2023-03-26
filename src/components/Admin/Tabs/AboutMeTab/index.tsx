import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../../../DefaultComponents/Button';

const Container = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  max-width: 550px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Description = styled.textarea`
  min-height: 120px;
  background-color: #f0f0f0;
  padding: 10px;
`;

const Select = styled.select``;
const Option = styled.option``;

const Button = styled(DefaultButton).attrs({
  type: 'submit',
})`
  align-self: flex-end;
`;

const AboutMeTab = () => {
  return (
    <Container>
      <Form>
        <Label>
          Описание:
          <Description></Description>
        </Label>
        <Label>
          Готовность к переезду:
          <Select>
            <Option defaultValue="ready">Готов</Option>
            <Option value="notReady">Не готов</Option>
          </Select>
        </Label>
        <Button>Сохранить</Button>
      </Form>
    </Container>
  );
};

export default AboutMeTab;
