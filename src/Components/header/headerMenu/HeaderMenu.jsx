import { HeaderMenuStyled } from './HeaderMenuStyled';

const HeaderMenu = ({ userEmail = 'marty', icon = 'logout' }) => {
  return (
    <HeaderMenuStyled>
      <p className="userEmail">{userEmail}</p>
      <button className="logOutButton">
        <span className="material-icons icon">{icon}</span>
        <span className="logOutText">Logout</span>
      </button>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
