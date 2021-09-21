import Button from "../../Components/common/button/Button";
import SprintList from "../../Components/sprints/SprintList/SprintList";
import { SprintStyled } from "./SprintStyled";
import buttonIcons from "../../configs/buttonIcons.json";
import NavContainer from "../../Components/common/containers/navContainer/NavContainer";
import NavMenu from "../../Components/navMenu/NavMenu";
import CreateMembers from "../../Components/projects/addMembers/createMembers";
import { useState, useEffect } from "react";
import CreateSprint from "../../Components/sprints/createSprint/CreateSprint";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../../redux/auth/auth-operations";
import { authSelectors } from "../../redux/auth";
import { getProjectsSprints } from "../../redux/sprints/sprints-operations";
import { useHistory } from "react-router";
import sprintSelectors from "../../redux/sprints/sprints-selectors";
// import { projectOperations } from "../../redux/projects/projects-operations";

const SprintPage = () => {
  const [openModalMembers, setOpenModalMembers] = useState(false);
  const [openModalSprints, setOpenModalSprints] = useState(false);
  const isAuth = useSelector(authSelectors.getAccessToken);
  const sprints = useSelector(sprintSelectors.getSprints);
  const dispatch = useDispatch();
  const history = useHistory();
  const idProject = history.location.pathname.slice(9);
  
  
  
  const [name, setName] = useState('');
  const [showInput, setShowInput] = useState(false);
  
  const handleNameChange = event => setName(event.target.value);
  const editNameHandle = () => {
    // eslint-disable-next-line no-undef
    setName(currentProject?.name);
    setShowInput(true);
  };
  
  const closeInputHandler = e => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    if (currentProject.name !== name || name !== '') {
      // eslint-disable-next-line no-undef
      dispatch(projectOperations.updateProject(projectId, { name }));
    }
    setShowInput(false);
  };

  // const onHandleClick = () => {
  //   const projectId = "614776eef4a6c03db8cc8ef3";
  //   dispatch(
  //     addSprint({
  //       projectId,
  //       sprintData: {
  //         title: "Sprint 6",
  //         endDate: "2020-12-31",
  //         duration: 1,
  //       },
  //     })
  //   );
  // };

  useEffect(() => {
    token.set(isAuth);
    isAuth && dispatch(getProjectsSprints(idProject));
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
                      ></Button>
                    )
                  </>
                )}
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
        {/* </div> */}
      </SprintStyled>
    </>
  );
};

export default SprintPage;
