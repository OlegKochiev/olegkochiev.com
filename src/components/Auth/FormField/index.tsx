import React from 'react';
import {useFormContext} from 'react-hook-form';
import styled from 'styled-components';

interface IFormFieldProps {
  name: string;
  fieldType: string;
  title: string;
}

const Label = styled.label`
  position: relative;
  width: 100%;
  font-size: 11px;
  text-transform: uppercase;
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

const FormField: React.FC<IFormFieldProps> = ({name, fieldType, title}) => {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <Label>
      {title}
      <Input {...register(name)} type={fieldType} />
      <ErrorMessage>{errors[name]?.message}</ErrorMessage>
    </Label>
  );
};

export default FormField;
