import { useDispatch } from "react-redux";
import { authOperations } from "../../../redux/auth";
import { HeaderMenuStyled } from "./HeaderMenuStyled";

const HeaderMenu = ({ userEmail = "marty", icon = "logout" }) => {
  const dispatch = useDispatch();

  const onHandleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <HeaderMenuStyled>
      <p className="userEmail">{userEmail}</p>
      <button className="logOutButton" onClick={onHandleLogOut}>
        <span className="material-icons icon">{icon}</span>
        <span className="logOutText">Logout</span>
      </button>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
