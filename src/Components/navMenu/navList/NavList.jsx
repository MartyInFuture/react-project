import { randomBackgroud } from "../../../helpers/randomBackground";
import { colors } from "../../../configs/background.json";
import { NavLink } from "react-router-dom";
import { List } from "./NavListStyled";

const NavList = ({ title, lists, path }) => {
  const list = [
    {
      title: "Project 1",
      description: "Project 1 description",
      members: ["test@email.com"],
      sprints: ["507f1f77bcf86cd799439012"],
      _id: "507f1f77bcf86cd799439011",
      __v: 0,
    },
    {
      title: "Project 2",
      description: "Project 1 description",
      members: ["test@email.com"],
      sprints: ["507f1f77bcf86cd799439012"],
      _id: "507f1f77bcf86cd799439011",
      __v: 0,
    },
    {
      title: "Project 3",
      description: "Project 1 description",
      members: ["test@email.com"],
      sprints: ["507f1f77bcf86cd799439012"],
      _id: "507f1f77bcf86cd799439011",
      __v: 0,
    },
    {
      title: "Project 4",
      description: "Project 1 description",
      members: ["test@email.com"],
      sprints: ["507f1f77bcf86cd799439012"],
      _id: "507f1f77bcf86cd799439011",
      __v: 0,
    },
  ];
  return (
    <List>
      {list.map((item) => (
        <li key={item.title} className="item">
          {/* <NavLink className={nav_link} activeClassName={nav_link__active} to={{ pathname: `/${path}/${item._id}` }}> */}
          <div
            className={`logo ${
              title === "спринти" ? "white" : randomBackgroud(colors)
            }`}
          ></div>
          <h3>{item.title}</h3>
          {/* </NavLink> */}
        </li>
      ))}
    </List>
  );
};

export default NavList;
