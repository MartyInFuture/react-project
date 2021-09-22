import { useState } from "react"
import { AuthFormStyled } from "./AuthFormStyled"
import { authOperations, authSelectors } from "../../../redux/auth"
import { useDispatch } from "react-redux"
import SubmitButton from "../../common/submitButton/SubmitButton"
import { Formik, Form, Field } from "formik"
import ErrorValidation, { funcMessage, validationSchema } from "./validationSchema"
import { toast } from "react-toastify"

const initialState = {
  email: "",
  password: "",
  repeatPassword: "",
}

const AuthForm = ({ repeatPassword = true }) => {
  const dispatch = useDispatch()

  const onHandleSubmit = ({ email, password, repeatPassword }) => {
    console.log(`email`, email)

    if (repeatPassword) {
      if (repeatPassword === password) {
        dispatch(authOperations.register({ email, password }))
      } else {
        toast.error(`Паролі не співпадають, потрібно повторити введеня`)
      }
    } else {
      dispatch(authOperations.logIn({ email, password }))
      toast.success(`Вітаємо!`)
    }
  }

  return (
    <AuthFormStyled>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values) => onHandleSubmit(values)}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit} className="inputWrapper">
            <Field
              className={`inputForm  ${errors.email ? "errorPassword" : null} `}
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email ? <div className="errors">{errors.email}</div> : null}
            {/* {errors.email && (
              <ErrorValidation touched={touched.email} message={errors.email} />
            )} */}

            <Field
              className={`inputForm  ${errors.password ? "errorPassword" : null} `}
              type="text"
              placeholder="Пароль"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password ? <div className="errors">{errors.password}</div> : null}
            {/* {errors.password && (
              <ErrorValidation
                touched={touched.password}
                message={errors.password}
              /> */}
            {/* )} */}
            {repeatPassword && (
              <Field
                className={`inputForm  ${errors.password ? "errorPassword" : null} `}
                type="text"
                placeholder="Повторіть пароль"
                name="repeatPassword"
                onChange={handleChange}
                value={values.repeatPassword}
              />
            )}
            <SubmitButton nameBtn={`${!repeatPassword ? "Увійти" : "Зареєструватись"}`} />
          </Form>
        )}
      </Formik>
    </AuthFormStyled>
  )
}

export default AuthForm
