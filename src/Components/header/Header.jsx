import { HeaderStyled } from "./HeaderStyled";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";
import sprite from "../../image/background/symbol-defs.svg";

import HeaderMenu from "./headerMenu/HeaderMenu";

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <HeaderStyled>
      <div className="logo">
        <svg className="logo">
          <use href={sprite + "#logo"}></use>
        </svg>
      </div>
      {isLoggedIn && <HeaderMenu userEmail={userEmail} />}
    </HeaderStyled>
  );
};

export default Header;
