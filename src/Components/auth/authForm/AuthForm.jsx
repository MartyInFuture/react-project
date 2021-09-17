import { AuthFormStyled } from './AuthFormStyled';

const authForm = ({ repeatPassword = true }) => {
  return (
    <AuthFormStyled>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="E-mail" />
      {repeatPassword && <input type="password" placeholder="E-mail" />}
    </AuthFormStyled>
  );
};

export default authForm;
