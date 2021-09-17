import AuthForm from "../Components/auth/authForm/AuthForm";
import AuthWrapper from "../Components/auth/authWrapper/AuthWrapper";

const Login = () => {
  return (
    <AuthWrapper
      title="Вхід"
      redirectMessage="Немає акаунту?"
      redirectLinkMessage="Зареєструватись"
      redirectTo="/register"
    >
      <AuthForm repeatPassword={false} />
    </AuthWrapper>
  );
};

export default Login;
