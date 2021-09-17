import { AuthWrapperStyled } from './AuthWrapperStyled';
import Title from '../../common/title/Title';
import { Link } from 'react-router-dom';

const authWrapper = ({
  title,
  redirectMessage = 'Маєте акаунт?',
  redirectLinkMessage = 'Увійти',
  redirectTo = '/login',
}) => {
  return (
    <AuthWrapperStyled>
      <Title title={title} />

      <p>
        {redirectMessage} <Link to={redirectTo}>{redirectLinkMessage}</Link>
      </p>
    </AuthWrapperStyled>
  );
};

export default authWrapper;
