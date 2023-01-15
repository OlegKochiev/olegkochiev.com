import * as yup from 'yup';
import {ERRORS} from '../../constants';

const passwordMinLength = 6;

const AuthFormSchema = yup
  .object({
    login: yup.string().required(ERRORS.FIELD.IS_REQUIRED),
    password: yup
      .string()
      .min(passwordMinLength, ERRORS.FIELD.MIN_LENGTH(passwordMinLength))
      .required(ERRORS.FIELD.IS_REQUIRED),
  })
  .required();

export default AuthFormSchema;
