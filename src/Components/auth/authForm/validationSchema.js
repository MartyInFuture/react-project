import React from "react"
import * as yup from "yup"
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Вкажіть, будь ласка, коректну поштову скриньку")
    .required("Вкажіть, будь ласка, свою поштову скриньку"),
  password: yup
    .string()
    .required("Вкажіть, будь ласка, свій пароль")
    .min(6, "Пароль має містити не менше 6 символів")
    .max(16, "Пароль має бути не більше 16 символів")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
      "Пароль повинен містити символи латинского алфавіту, прописні та заглавні букви та цифри"
    ),
})
// const funcMessage = (errorMessage) => {
//   return <span className="errorMessage">{errorMessage}</span>;
// };
export { validationSchema }
const ErrorValidation = ({ touched, message }) => {
  return <>{!touched ? message && <div>{message}</div> : <div>&nbsp;</div>}</>
}
export default ErrorValidation
// const funcMessage = (errorMessage) => {
//   return <span className="errorMessage">{errorMessage}</span>;
// };
// export { funcMessage, validationSchema };
// const ErrorValidation = ({ touched, message }) => {
//   return <>{!touched ? message && <div>{message}</div> : <div>&nbsp;</div>}</>;
// };
// export default ErrorValidation;
