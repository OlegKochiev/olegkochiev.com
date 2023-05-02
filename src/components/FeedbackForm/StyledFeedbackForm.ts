import styled from 'styled-components';
import {Theme} from '../../types';

export const StyledFeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: 40px auto 0;
  gap: 20px;
`;

const BaseInput = styled.input<{theme: Theme}>`
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  border: solid 1px ${({theme}) => theme.lineColor};
`;

export const StyledFormLegend = styled.legend``;
export const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
`;
export const StyledPhoneInput = styled(BaseInput)``;
export const StyledEmailInput = styled(BaseInput)``;
export const StyledNameInput = styled(BaseInput)``;
export const StyledMessageTextarea = styled.textarea<{theme: Theme}>`
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  padding: 7px;
  border-radius: 4px;
  border: solid 1px ${({theme}) => theme.lineColor};
`;
export const StyledSubmitButton = styled.button`
  align-self: flex-end;
  padding: 10px;
  background-color: #078080;
  color: #fff;
  transition: background-color 0.15s;
  border-radius: 3px;
  &:hover {
    background-color: #056060;
  }
`;
