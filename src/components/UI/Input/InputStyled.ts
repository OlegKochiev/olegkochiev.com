import styled from 'styled-components';

const Label = styled.label`
  width: 100%;
  text-transform: uppercase;
`;

const BaseInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  border: solid 1px ${({theme}) => theme.lineColor};
  &:focus {
    outline: transparent;
    border-color: #078080;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  margin-top: 5px;
  font-size: 10px;
  text-transform: uppercase;
  color: #078080;
`;

export {Label, BaseInput, ErrorMessage};
