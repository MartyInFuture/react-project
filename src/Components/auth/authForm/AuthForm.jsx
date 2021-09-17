import { useState } from "react";
import { AuthFormStyled } from "./AuthFormStyled";
import { authOperations } from "../../../redux/auth";
import { useDispatch } from "react-redux";

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
        console.log(
          `Пароли совпадают и отправляем запрос на бек`,
          user.email,
          user.password
        );
      } else {
        console.log(`Пароли не совпадают повторить ввод`);
      }
    } else {
      dispatch(authOperations.logIn({ email, password }));
      console.log(
        `Это вход и отправляем запрос на бек`,
        user.email,
        user.password
      );
    }
  };

  const onHandleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <AuthFormStyled onSubmit={onHandleSubmit}>
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChangeInput}
        value={user.email}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        name="password"
        onChange={handleChangeInput}
        value={user.password}
        required
      />
      {repeatPassword && (
        <input
          type="password"
          placeholder="Повторити пароль"
          name="repeatPassword"
          onChange={handleChangeInput}
          value={user.repeatPassword}
          required
        />
      )}
      <button type="submit">SignIn</button>
      <button type="button" onClick={onHandleLogOut}>
        LogOut
      </button>
    </AuthFormStyled>
  );
};

export default AuthForm;
