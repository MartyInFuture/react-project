import Button from '../../Components/common/button/Button';
import SprintList from '../../Components/sprints/SprintList/SprintList';
import { SprintStyled } from './SprintStyled';
import buttonIcons from '../../configs/buttonIcons.json';
import NavContainer from '../../Components/common/containers/navContainer/NavContainer';
import NavMenu from '../../Components/navMenu/NavMenu';
import CreateMembers from '../../Components/projects/addMembers/CreateMember';
import { useState, useEffect } from 'react';
import CreateSprint from '../../Components/sprints/createSprint/CreateSprint';
import { useDispatch, useSelector } from 'react-redux';
import { token } from '../../redux/auth/auth-operations';
import { authSelectors } from '../../redux/auth';
import { getProjectsSprints } from '../../redux/sprints/sprints-operations';
import projectsSeletors from '../../redux/projects/projects-selectors';
import { useHistory } from 'react-router';
import sprintSelectors from '../../redux/sprints/sprints-selectors';
import projectOperations from '../../redux/projects/projects-operations';
import { useParams } from 'react-router-dom';

const SprintPage = () => {
  const [openModalMembers, setOpenModalMembers] = useState(false);
  const [openModalSprints, setOpenModalSprints] = useState(false);
  const isAuth = useSelector(authSelectors.getAccessToken);
  const sprints = useSelector(sprintSelectors.getSprints);
  const dispatch = useDispatch();

  const projects = useSelector(projectsSeletors.getProjects);
  const [name, setName] = useState('');

  const history = useHistory();
  const idProject = history.location.pathname.slice(9);
  const [title, setTitle] = useState('title');
  const [description, setDescription] = useState('description');

  const [showInput, setShowInput] = useState(false);
  const { id } = useParams();
  const currentProject = projects.find((project) => project._id === id);

  const editNameHandle = () => {
    setShowInput(true);
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'newTitle':
        setTitle(value);
        break;
      default:
        break;
    }
  };

  const changeTitleSubmit = (e) => {
    e.preventDefault();

    if (currentProject.title !== title || title !== '') {
      dispatch(
        projectOperations.updateProjectTitle({
          id,
          title: {
            title: title,
          },
        })
      );
    }
    setShowInput(false);
  };

  useEffect(() => {
    token.set(isAuth);
    isAuth &&
      dispatch(getProjectsSprints(id)) &&
      dispatch(projectOperations.getProjects());
  }, [dispatch, id]);

  useEffect(() => {
    if (currentProject) {
      setTitle(currentProject.title);
      setDescription(currentProject.description);
    }
  }, [currentProject]);

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
                {!showInput && (
                  <>
                    <h2>{title}</h2>

                    <Button
                      title="Edit the name"
                      icon={buttonIcons.edit}
                      classBtn="editDelete"
                      type="button"
                      className="buttonChange"
                      onHandleClick={editNameHandle}
                    />
                  </>
                )}
                {showInput && (
                  <form
                    onSubmit={changeTitleSubmit}
                    className={
                      showInput ? 'changeTitleFormActive' : 'changeTitleForm'
                    }
                  >
                    <input
                      className="inputChangeTitle"
                      value={title}
                      name="newTitle"
                      type="text"
                      onChange={onHandleChange}
                    />
                    <Button
                      icon={buttonIcons.edit}
                      classBtn="editDelete"
                      title="Edit the title"
                      type="submit"
                      className="buttonChange"
                      onHandleClick={changeTitleSubmit}
                    />
                  </form>
                )}
              </div>

              <p>{description}</p>

              <div className="addWrap">
                <button
                  className="btnWrap"
                  onClick={() => setOpenModalMembers(true)}
                >
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
