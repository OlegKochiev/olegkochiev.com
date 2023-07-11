import React, {InputHTMLAttributes} from 'react';
// import {useFormContext} from 'react-hook-form';
// import {ErrorMessage, Label} from './InputStyled';

// // расширение дефолтных атрибутов элемента
// interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   name: string;
//   title: string;
// }

// const Input = ({name, title, ...rest}: IInputProps) => {
//   const {
//     register,
//     formState: {errors},
//   } = useFormContext();

//   const errorMessage = errors[name]?.message as string;

//   return (
//     <Label>
//       {title}
//       <CustomInput {...rest} {...register(name)} />
//       <ErrorMessage>{errorMessage}</ErrorMessage>
//     </Label>
//   );
// };

// export default Input;
