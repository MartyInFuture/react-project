// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../../Components/common/button/Button';
// import TaskList from '../../Components/tasks/taskList/TaskList';
// import Title from '../../Components/common/title/Title';
// import Counter from '../../Components/tasks/Counter/Counter';
// import ContentContainer from '../../Components/common/containers/contentContainer/ContentContainer';
// import { TasksStyled } from './TasksStyled';
import Chart from '../../Components/chart/Chart';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/common/button/Button';
import TaskList from '../../Components/tasks/taskList/TaskList';
import Title from '../../Components/common/title/Title';
import Counter from '../../Components/tasks/Counter/Counter';
import ContentContainer from '../../Components/common/containers/contentContainer/ContentContainer';
import { TasksStyled } from './TasksStyled';
import 'material-icons/iconfont/material-icons.css';
import NavMenu from '../../Components/navMenu/NavMenu';
import NavContainer from '../../Components/common/containers/navContainer/NavContainer';

const Tasks = () => {
  const [filterText, setfilterText] = useState('');
  const [open, setOpen] = useState(false);

  const data = {
    title: 'Sprint 1',
    startDate: '2020-12-30',
    endDate: '2020-12-31',
    duration: 1,
    tasks: [
      {
        title: 'Task 1',
        hoursPlanned: 1,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2020-12-31',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 2',
        hoursPlanned: 2,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-5-12',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 3',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 4',
        hoursPlanned: 4,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-10-01',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 5',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 6',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 7',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 8',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 9',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 10',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 11',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 12',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 13',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 14',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
      {
        title: 'Task 15',
        hoursPlanned: 3,
        hoursWasted: 0,
        hoursWastedPerDay: [
          {
            currentDay: '2021-6-19',
            singleHoursWasted: 0,
          },
        ],
        _id: '507f1f77bcf86cd799439011',
        __v: 0,
      },
    ],
    projectId: '507f1f77bcf86cd799439012',
    _id: '507f1f77bcf86cd799439013',
    __v: 0,
  };

  const modalOpen = () => {
    console.log('modalOpen()');
  };

  const correctTitleTask = () => {
    console.log('correctTitleTask()');
  };

  const diagrammOpenFn = () => {
    console.log('diagrammOpenFn()');
    setOpen(true);
  };

  const filterChange = (e) => {
    const text = e.target.value;
    setfilterText(text);
  };

  return (
    <>
      <NavContainer>
        <NavMenu />
      </NavContainer>
      <ContentContainer>
        <TasksStyled>
          <div>
            {/* <div>
                <Link>Показати спринти</Link>
              </div> */}
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
                  <div className="btnAddTitle ">
                    <Button />
                  </div>
                  <div className="btnAddTitleTablet ">
                    <div className="btnEdit">
                      <Button />
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
                <div className="btnAddchartTitle">
                  <Button icon="addchart" />
                </div>
              </div>
              <TaskList />
            </div>
          </div>
          <div className="btnEditTitleAfter"></div>
          <div className="btnAddTitle">
            <Button onHandleClick={() => setOpen(true)} />
          </div>
          <div className="btnAddchartTitle">
            <Button icon="addchart" onHandleClick={() => setOpen(true)} />
          </div>
        </TasksStyled>
      </ContentContainer>
      <Chart open={open} setOpen={() => setOpen(false)} />
    </>
  );
};

export default Tasks;
