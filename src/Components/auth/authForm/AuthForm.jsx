import { useState } from "react";
import { AuthFormStyled } from "./AuthFormStyled";
import { authOperations } from "../../../redux/auth";
import { useDispatch } from "react-redux";
import SubmitButton from "../../common/submitButton/SubmitButton";

const initialState = {
  email: "",
  password: "",
  repeatPassword: "",
};

const AuthForm = ({ repeatPassword = true }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;

    if (repeatPassword) {
      if (user.repeatPassword === user.password) {
        dispatch(authOperations.register({ email, password }));
        setUser({
          email: "",
          password: "",
          repeatPassword: "",
        });
      } else {
        console.log(`Пароли не совпадают повторить ввод`);
      }
    } else {
      dispatch(authOperations.logIn({ email, password }));
      setUser({
        email: "",
        password: "",
        repeatPassword: "",
      });
    }
  };

  return (
    <AuthFormStyled onSubmit={onHandleSubmit}>
      <input
        className="inputForm"
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChangeInput}
        value={user.email}
        required
      />
      <input
        className="inputForm"
        type="password"
        placeholder="Пароль"
        name="password"
        onChange={handleChangeInput}
        value={user.password}
        required
      />
      {repeatPassword && (
        <input
          className="inputForm"
          type="password"
          placeholder="Повторіть пароль"
          name="repeatPassword"
          onChange={handleChangeInput}
          value={user.repeatPassword}
          required
        />
      )}
      <SubmitButton
        nameBtn={`${!repeatPassword ? "Увійти" : "Зареєструватись"}`}
      />
    </AuthFormStyled>
  );
};

export default AuthForm;
