import { HeaderStyled } from './HeaderStyled';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

import HeaderMenu from './headerMenu/HeaderMenu';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <HeaderStyled>
      <div className="logo">Logo</div>
      {isLoggedIn && <HeaderMenu />}
    </HeaderStyled>
  );
};

export default Header;
