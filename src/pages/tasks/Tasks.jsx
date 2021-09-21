// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../../Components/common/button/Button';
// import TaskList from '../../Components/tasks/taskList/TaskList';
// import Title from '../../Components/common/title/Title';
// import Counter from '../../Components/tasks/Counter/Counter';
// import ContentContainer from '../../Components/common/containers/contentContainer/ContentContainer';
// import { TasksStyled } from './TasksStyled';
import Chart from "../../Components/chart/Chart";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSprintsTasks } from "../../redux/task/task-operations";
import taskSelectors from "../../redux/task/task-selectors";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
const Tasks = () => {
  const [filterText, setfilterText] = useState("");
  //   const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [closeModalTask, setCloseModalTask] = useState(false);

  const history = useHistory();
  const sprintId = history.location.pathname.slice(8);
  //   const { id } = useParams();
  //   const tasks = useSelector(taskSelectors.getTasks);

  //   useEffect(() => {
  //     dispatch(getSprintsTasks(id));
  // console.log();
  //   }, []);

  const modalOpen = () => {
    console.log("modalOpen()");
  };

  const correctTitleTask = () => {
    console.log("correctTitleTask()");
  };

  const diagrammOpenFn = () => {
    console.log("diagrammOpenFn()");
    setOpen(true);
  };

  const filterChange = (e) => {
    const text = e.target.value;
    const Filter = text.toLowerCase();
    setfilterText(Filter);
    // const res = tasks.filter((task) => tasks.title.includes(Filter));
    // setFiltredTasks(res);
  };

  return (
    <>
      <NavContainer>
        <NavMenu />
      </NavContainer>

      <TasksStyled>
        <div className="TaskInterfaceContainer">
          <div>
            <div className="counterSearchContainer">
              {/* <Counter data={data} /> */}
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
                <div className="SprintTitleBtnEditWrapper">
                  <div className="TaskTitleWrapper">
                    {/* <Title title={data.title} /> */}
                  </div>
                  <div className="btnEditTitle">
                    <Button icon="edit" classBtn="editDelete" />
                  </div>
                </div>
                <div className="btnCreateTask ">
                  <Button />
                </div>

                <div className="btnCreateTaskTablet ">
                  {/* Копка для создания спринта Планшет */}
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
            <TaskList filter={filterText} />
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
