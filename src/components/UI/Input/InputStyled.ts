import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  width: 100%;
  font-size: 11px;
  text-transform: uppercase;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: inherit;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: transparent;
  &:focus {
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

export {Label, CustomInput, ErrorMessage};
