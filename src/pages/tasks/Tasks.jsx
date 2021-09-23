import Chart from "../../Components/chart/Chart";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Button from "../../Components/common/button/Button";
import TaskList from "../../Components/tasks/taskList/TaskList";
import Title from "../../Components/common/title/Title";
import Counter from "../../Components/tasks/counter/Counter";
import ContentContainer from "../../Components/common/containers/contentContainer/ContentContainer";
import { TasksStyled } from "./TasksStyled";
import "material-icons/iconfont/material-icons.css";
import NavMenu from "../../Components/navMenu/NavMenu";
import NavContainer from "../../Components/common/containers/navContainer/NavContainer";
import CreateProject from "../../Components/projects/createProject/CreateProject";
import CreateTask from "../../Components/tasks/createTask/CreateTask";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { token } from "../../redux/auth/auth-operations";
import { authSelectors } from "../../redux/auth";
import { getProjectsSprints } from "../../redux/sprints/sprints-operations";
import projectOperations from "../../redux/projects/projects-operations";
import sprintSelectors from "../../redux/sprints/sprints-selectors";
import projectSelectors from "../../redux/projects/projects-selectors";
import taskSelectors from "../../redux/task/task-selectors";
import { patchTitleSprint } from "../../redux/task/task-operations";

const Tasks = () => {
  const [filterText, setfilterText] = useState("");
  const [sprintName, setSprintName] = useState("");

  const isAuth = useSelector(authSelectors.getAccessToken);
  const sprintsArr = useSelector(taskSelectors.getSprint);
  const [open, setOpen] = useState(false);
  const [closeModalTask, setCloseModalTask] = useState(false);
  const [targetDate, settargetDate] = useState("");
  const [sprint, setSprint] = useState(null);
  const sprints = useSelector(sprintSelectors.getSprints);
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");

  // const currentSprint = sprints.find((project) => project._id === id);

  const editNameHandle = async () => {
    await setShowInput(true);
    document.querySelector("#inputChangeTitle").focus();
  };

  const changeTitleSubmit = (e) => {
    e.preventDefault();

    if (sprintName !== title || title !== "") {
      dispatch(
        patchTitleSprint({
          id,
          title: {
            title,
          },
        })
      );
    }
    setShowInput(false);
  };

  // const onHandleBlurChangeTitle = () => {};

  const onHandleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const Sprint = sprints.filter(
    (sprint) => sprint._id === id || sprint.id === id
  );

  useEffect(() => {
    token.set(isAuth);
    dispatch(projectOperations.getProjects());
    // console.log("Location obj", location.pathname.split("/"));/
    const projectId = location.pathname.split("/")[2];
    isAuth && dispatch(getProjectsSprints(projectId));
  }, [dispatch, id]);

  useEffect(() => {
    if (Sprint.length !== 0) {
      const SprintName = Sprint[0].title;
      setSprint(Sprint[0]);
      setSprintName(SprintName);
    }
  }, [sprints]);

  useEffect(() => {
    if (sprintName) {
      setTitle(sprintName);
    }
  }, [sprintName]);

  // console.log("Location obj", location.pathname.split("/"));
  const projectId = location.pathname.split("/")[2];
  const filterChange = (e) => {
    const text = e.target.value;
    const Filter = text.toLowerCase();
    setfilterText(Filter);
  };

  return (
    <>
      <NavContainer>
        <NavMenu
          title="спринти"
          list={sprints}
          path={`project/${projectId}/sprint`}
          linkTo={`/project/${projectId}`}
        />
      </NavContainer>
      <TasksStyled>
        <div className="TaskInterfaceContainer">
          <div>
            <div className="counterSearchContainer">
              <Counter data={sprint} settargetDate={settargetDate} />
              <div className="inputBox">
                <span className="material-icons iconSearch">search</span>
                <span className="material-icons iconSearchTablet">search</span>
                <input
                  type="text"
                  onChange={filterChange}
                  className="inputSearch"
                />
              </div>
            </div>

            <div>
              <div className="TaskWrapper">
                {!showInput && (
                  <div className="SprintTitleBtnEditWrapper">
                    <div className="TaskTitleWrapper">
                      <Title title={sprintName} />
                    </div>
                    <div className="TaskTitleWrapper"></div>
                    <div className="btnEditTitle">
                      <Button
                        icon="edit"
                        classBtn="editDelete"
                        onHandleClick={editNameHandle}
                      />
                    </div>
                  </div>
                )}
                {showInput && (
                  <form
                    onSubmit={changeTitleSubmit}
                    className={
                      showInput ? "changeTitleFormActive" : "changeTitleForm"
                    }
                  >
                    <input
                      className="inputChangeTitle"
                      value={title}
                      name="newTitle"
                      type="text"
                      onChange={onHandleChange}
                      id="inputChangeTitle"
                      // onBlur={onHandleBlurChangeTitle}
                    />
                    <Button
                      // icon={buttonIcons.edit}
                      icon="edit"
                      classBtn="editDelete"
                      title="Edit the title"
                      type="submit"
                      className="buttonChange"
                      onHandleClick={changeTitleSubmit}
                    />
                  </form>
                )}
                <div className="btnCreateTask ">
                  <Button onHandleClick={() => setCloseModalTask(true)} />
                </div>

                <div className="btnCreateTaskTablet ">
                  <div className="btnCreateSprintTitle openModalTask btnEdit">
                    <Button onHandleClick={() => setCloseModalTask(true)} />
                  </div>
                  <p className="AddTaskParagraph">Створити задачу</p>
                </div>
              </div>

              <div className="discrbtionHoursContainer">
                <p className="discrbtionHours">Заплановано годин</p>
                <p className="discrbtionHours">Витрачено год / день</p>
                <p className="discrbtionHours">Витрачено годин</p>
              </div>
              <div className="discrbtionHoursContainerDesktop">
                <p className="discrbtionHours">Задача</p>
                <p className="discrbtionHours">Заплановано годин</p>
                <p className="discrbtionHours">Витрачено год / день</p>
                <p className="discrbtionHours">Витрачено годин</p>
                <div className="SearchDesktop">
                  <span className="material-icons iconSearchDesktop">
                    search
                  </span>
                  <input
                    type="text"
                    onChange={filterChange}
                    className="inputSearchDesktop"
                  />
                </div>
              </div>
              <div className="discrbtionHoursContainerAfter"></div>
              <div className="btnEditTitleAfter"></div>

              <div>
                {/* Кнопки для мобилки */}
                <div className="btnAddchartTitle">
                  <Button icon="addchart" onHandleClick={() => setOpen(true)} />
                </div>
                <div className="btnAddchartTitleTablet">
                  <Button icon="addchart" onHandleClick={() => setOpen(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContentContainer>
          <div className="TaskListMaimContainner">
            <TaskList filter={filterText} targetDate={targetDate} />
          </div>
        </ContentContainer>
      </TasksStyled>
      <Chart open={open} setOpen={() => setOpen(false)} />
      <CreateTask
        closeModal={closeModalTask}
        setCloseModal={setCloseModalTask}
      />
    </>
  );
};

export default Tasks;
