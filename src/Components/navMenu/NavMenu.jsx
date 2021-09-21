import { Wrapper } from "./NavMenuStyled";
import NavList from "./navList/NavList";
import Button from "../common/button/Button";
import { Link } from "react-router-dom";

const NavMenu = ({ title, list, path, linkTo = "/" }) => {
  return (
    <Wrapper>
      <Link className="goBack" to={{ pathname: linkTo }}>
        <div>
          <span className="material-icons-outlined arrow">arrow_right_alt</span>
        </div>
        <p className="button-title">Показати {title}</p>
      </Link>
      <NavList title={title} list={list} path={path} />
      <div className="button__wrapper">
        <Button />
        <p className="text">
          Створити {title === "спринти" ? "спринт" : "проект"}
        </p>
      </div>
    </Wrapper>
  );
};

export default NavMenu;
