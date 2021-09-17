import { Wrapper } from "./NavMenuStyled";
import NavList from "./navList/NavList";
import Button from "../common/button/Button";

const NavMenu = ({ title, list, path }) => {
  return (
    <Wrapper>
      <button className="button" type="button">
        Показати {title}
      </button>
      <NavList title={title} list={list} path={path} />
      <div className="button__wrapper">
        <Button className="button_add" />
        <p className="text">
          Створити {title === "спринти" ? "спринт" : "проект"}
        </p>
      </div>
    </Wrapper>
  );
};

export default NavMenu;
