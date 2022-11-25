import { object, string } from "yup";
import { loginSchema } from "./loginSchema";

const { email, password } = loginSchema;

export const validationSchema = object().shape({
  [email.name]: string().required(),
  [password.name]: string().required(),
})