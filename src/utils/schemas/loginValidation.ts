import * as yup from 'yup';
import {ERRORS} from '../../constants';

const LoginFormSchema = yup
  .object({
    login: yup.string().required(ERRORS.FIELD.IS_REQUIRED),
    password: yup.string().min(6, ERRORS.FIELD.LENGTH).required(ERRORS.FIELD.IS_REQUIRED),
  })
  .required();

export default LoginFormSchema;
