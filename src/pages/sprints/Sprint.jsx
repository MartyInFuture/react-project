import Button from "../../Components/common/button/Button";
import Title from "../../Components/common/title/Title";
import SprintList from "../../Components/sprints/SprintList/SprintList";
// import CreateMembers from '../Components/projects/addMembers/CreateMembers';
import { SprintStyled } from "./SprintStyled";
import buttonIcons from "../../configs/buttonIcons.json";
import NavContainer from "../../Components/common/containers/navContainer/NavContainer";
import NavMenu from "../../Components/navMenu/NavMenu";
// import CreateMembers from "../Components/projects/addMembers/CreateMembers"
import CreateMembers from "../../Components/projects/addMembers/CreateMembers";
// import {} from "../../Components/projects/addMembers/CreateMembers";
import { useState, useEffect } from "react";
import CreateSprint from "../../Components/sprints/createSprint/CreateSprint";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../../redux/auth/auth-operations";
import { authSelectors } from "../../redux/auth";
import { getProjectsSprints } from "../../redux/sprints/sprints-operations";
import { useHistory } from "react-router";
import sprintSelectors from "../../redux/sprints/sprints-selectors";
import projectOperations from "../../redux/projects/projects-operations";

const SprintPage = () => {
  const [openModalMembers, setOpenModalMembers] = useState(false);
  const [openModalSprints, setOpenModalSprints] = useState(false);
  const isAuth = useSelector(authSelectors.getAccessToken);
  const sprints = useSelector(sprintSelectors.getSprints);
  const dispatch = useDispatch();
  const history = useHistory();
  const idProject = history.location.pathname.slice(9);

  useEffect(() => {
    token.set(isAuth);
    isAuth &&
      dispatch(getProjectsSprints(idProject)) &&
      dispatch(projectOperations.getProjects());
  }, [dispatch]);

  return (
    <>
      <NavContainer>
        <NavMenu />
      </NavContainer>
      <SprintStyled>
        {/* <div className="main"> */}
        <article>
          <div className="headerWrap">
            <div className="contentWrap">
              <div className="titleWrap">
                <form>
                  <input
                    className="inputChangeTitle"
                    // value={name}
                    name="name"
                    type="text"
                    // onChange={handleNameChange}
                  />
                  {/* <button
                                    onHandleClick={null}
                                    
                                /> */}
                </form>
                {/* {!showInput && ( */}
                <>
                  <Button
                    icon={buttonIcons.edit}
                    classBtn="editDelete"
                    title="Edit the name"
                    type="button"
                    className="buttonChange"
                    // onClick={editNameHandle}
                  />
                  <Title />
                </>
                {/* )} */}
              </div>

              <p>current project description</p>

              <div className="addWrap">
                <button
                  className="btnWrap"
                  onClick={() => setOpenModalMembers(true)}
                >
                  <Button
                    icon={buttonIcons.group_add}
                    classBtn="group_add"
                    title="Add people"
                    type="button"
                  />
                  <span className="textAddPeople">Add people</span>
                </button>

                <CreateMembers
                  closeModal={openModalMembers}
                  setCloseModal={setOpenModalMembers}
                />
              </div>
            </div>

            {767 && (
              <>
                <Button
                  icon={buttonIcons.add}
                  classBtn="add"
                  onHandleClick={() => setOpenModalSprints(true)}
                />
                <CreateSprint
                  closeModal={openModalSprints}
                  setCloseModal={setOpenModalSprints}
                />
              </>
            )}
          </div>

          <SprintList sprints={sprints} />
        </article>
        {/* </div> */}
      </SprintStyled>
    </>
  );
};

export default SprintPage;
