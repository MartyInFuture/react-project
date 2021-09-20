// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../../Components/common/button/Button';
// import TaskList from '../../Components/tasks/taskList/TaskList';
// import Title from '../../Components/common/title/Title';
// import Counter from '../../Components/tasks/Counter/Counter';
// import ContentContainer from '../../Components/common/containers/contentContainer/ContentContainer';
// import { TasksStyled } from './TasksStyled';
import Chart from "../../Components/chart/Chart";

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

const Tasks = () => {
  //   const [filterText, setfilterText] = useState("");
  const [open, setOpen] = useState(false);
  const [closeModalTask, setCloseModalTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filtredTasks, setFiltredTasks] = useState([]);

  const data = {
    title: "Sprint 1",
    startDate: "2020-12-30",
    endDate: "2020-12-31",
    duration: 1,
    tasks: [
      {
        title: "Task 1",
        hoursPlanned: 1,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2020-12-31",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 2",
        hoursPlanned: 2,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-5-12",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 3",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 4",
        hoursPlanned: 4,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-10-01",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 5",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 6",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 7",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 8",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 9",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 10",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 11",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 12",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 13",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 14",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
      {
        title: "Task 15",
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: "2021-6-19",
            singleHoursWasted: 0,
          },
        ],
        _id: "507f1f77bcf86cd799439011",
        __v: 0,
      },
    ],
    projectId: "507f1f77bcf86cd799439012",
    _id: "507f1f77bcf86cd799439013",
    __v: 0,
  };

  useEffect(() => {
    setTasks(data.tasks);
  }, []);

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
    // setfilterText(text);
    const res = tasks.filter((task) => tasks.title.includes(Filter));
    setFiltredTasks(res);
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
              <Counter data={data} />
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
                    <Title title={data.title} />
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
            <TaskList filtredTasks={filtredTasks} />
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
