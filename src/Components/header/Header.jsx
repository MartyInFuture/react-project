import { HeaderStyled } from './HeaderStyled';
import HeaderMenu from './headerMenu/HeaderMenu';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">Logo</div>
      {true && <HeaderMenu />}
    </HeaderStyled>
  );
};

export default Header;
