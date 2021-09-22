import Button from "../../Components/common/button/Button";
import SprintList from "../../Components/sprints/SprintList/SprintList";
import { SprintStyled } from "./SprintStyled";
import buttonIcons from "../../configs/buttonIcons.json";
import NavContainer from "../../Components/common/containers/navContainer/NavContainer";
import NavMenu from "../../Components/navMenu/NavMenu";
// import CreateMembers from "../Components/projects/addMembers/CreateMembers"
import CreateMembers from "../../Components/projects/addMembers/CreateMember";
import { useState, useEffect } from "react";
import CreateSprint from "../../Components/sprints/createSprint/CreateSprint";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../../redux/auth/auth-operations";
import { authSelectors } from "../../redux/auth";
import { getProjectsSprints } from "../../redux/sprints/sprints-operations";
import projectsSeletors from "../../redux/projects/projects-selectors";
import { useHistory } from "react-router";
import sprintSelectors from "../../redux/sprints/sprints-selectors";
import projectOperations from "../../redux/projects/projects-operations";
import { useParams } from "react-router-dom";

const SprintPage = () => {
  const [openModalMembers, setOpenModalMembers] = useState(false);
  const [openModalSprints, setOpenModalSprints] = useState(false);
  const isAuth = useSelector(authSelectors.getAccessToken);
  const sprints = useSelector(sprintSelectors.getSprints);
  const dispatch = useDispatch();
  const projects = useSelector(projectsSeletors.getProjects);
  const [name, setName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    token.set(isAuth);
    isAuth &&
      dispatch(getProjectsSprints(id)) &&
      dispatch(projectOperations.getProjects());
  }, [dispatch, id]);

  const handleNameChange = (event) => setName(event.target.value);
  const editNameHandle = () => {
    // eslint-disable-next-line no-undef
    setName(currentProject?.name);
    setShowInput(true);
  };

  const closeInputHandler = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    if (currentProject.name !== name || name !== "") {
      // eslint-disable-next-line no-undef
      dispatch(projectOperations.updateProject(projectId, { name }));
    }
    setShowInput(false);
  };

  return (
    <>
      <NavContainer>
        <NavMenu title="проекти" list={projects} path="project" />
      </NavContainer>
      <SprintStyled>
        <article>
          <div className="headerWrap">
            <div className="contentWrap">
              <div className="titleWrap">
                <form
                  onSubmit={closeInputHandler}
                  className={
                    showInput ? "changeTitleFormActive" : "changeTitleForm"
                  }
                >
                  <input
                    className="inputChangeTitle"
                    value={name}
                    name="name"
                    type="text"
                    onChange={handleNameChange}
                  />
                  <Button
                    icon={buttonIcons.edit}
                    classBtn="editDelete"
                    title="Edit the name"
                    type="submit"
                    className="buttonChange"

                    //   />
                    //   <Title />
                    // </>
                  />
                </form>
                {!showInput && (
                  <>
                    {/* <h2>{currentProject?.name}</h2> */}
                    {/* {userEmail === currentProject?.owner.email && ( */}
                    <Button
                      title="Edit the name"
                      icon={buttonIcons.edit}
                      classBtn="editDelete"
                      type="button"
                      className="buttonChange"
                      onClick={editNameHandle}
                    />
                  </>
                )}
              </div>

              <p>current project description</p>

              <div className="addWrap">
                <button
                  className="btnWrap"
                  onClick={() => setOpenModalMembers(true)}
                >
                  {/* <Button
                    icon={buttonIcons.group_add}
                    classBtn="group_add"
                    title="Add people"
                    type="button"
                  /> */}
                  <span className="material-icons-outlined">
                    {buttonIcons.group_add}
                  </span>
                  <span className="textAddPeople">Add people</span>
                </button>

                <CreateMembers
                  closeModal={openModalMembers}
                  setOpenModal={setOpenModalMembers}
                />
              </div>
            </div>
            <div className="createSprintWrap">
              <>
                <Button
                  icon={buttonIcons.add}
                  classBtn="add"
                  className="createNewSprintFixed"
                  onHandleClick={() => setOpenModalSprints(true)}
                />
                <CreateSprint
                  closeModal={openModalSprints}
                  setCloseModal={setOpenModalSprints}
                />
                <span className="createSprintSpan">Create a sprint</span>
              </>
            </div>
          </div>
          <SprintList sprints={sprints} />
        </article>
      </SprintStyled>
    </>
  );
};

export default SprintPage;
