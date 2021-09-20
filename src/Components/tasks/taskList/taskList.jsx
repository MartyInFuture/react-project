import TaskListItem from "../taskListItem/TaskListItem"
import { useState, useEffect } from "react"
import { Tasklist } from "./TaskListStyled"


const TaskList = () => {
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
        _id: "507f1f77bcf86cd799439012",
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
        _id: "507f1f77bcf86cd799439013",
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
        _id: "507f1f77bcf86cd799439014",
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
        _id: "507f1f77bcf86cd799439015",
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
        _id: "507f1f77bcf86cd799439016",
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
        _id: "507f1f77bcf86cd799439017",
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
        _id: "507f1f77bcf86cd799439018",
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
        _id: "507f1f77bcf86cd799439019",
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
        _id: "507f1f77bcf86cd799439020",
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
        _id: "507f1f77bcf86cd799439021",
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
        _id: "507f1f77bcf86cd799439022",
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
        _id: "507f1f77bcf86cd799439023",
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
        _id: "507f1f77bcf86cd799439024",
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
        _id: "507f1f77bcf86cd799439025",
        __v: 0,
      },
    ],
    projectId: "507f1f77bcf86cd799439026",
    _id: "507f1f77bcf86cd799439013",
    __v: 0,
  }

  return (
    <Tasklist>
      {/* filterText === "" && */}
      {data.tasks.map((item) => (
        <TaskListItem key={item._id} task={item} />
      ))}
    </Tasklist>
  );
};


export default TaskList
