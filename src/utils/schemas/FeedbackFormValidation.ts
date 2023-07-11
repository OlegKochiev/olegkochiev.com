import * as yup from 'yup';
export const schema = yup.object().shape({
  name: yup.string().required('Введите Ваше имя'),
  email: yup.string().required('Введите ваш email').email('Необходимый формат email: abc@gmail.com'),
  phone: yup.string().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g, {
    message: 'Необходимый формат номера: +7 999 123 4567',
  }),
  notes: yup.string(),
});
