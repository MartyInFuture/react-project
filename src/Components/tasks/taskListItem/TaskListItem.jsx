import Button from "../../common/button/Button";
import { TaskListItemWrapper } from "./TaskListItemStyled";
import {
  deleteSprintsTask,
  patchTaskHours,
} from "../../../redux/task/task-operations";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import moment from "moment";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  hoursWasted: yup
    .number()
    .min(0, "Должно быть от нуля до 8")
    .max(8, "Должно быть от нуля до 8")
    .required("Должно быть обязательно")
    .positive()
    .integer(),
});

const TaskListItem = ({ task, targetDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoursWasted, sethoursWasted] = useState(0);
  const [sprintId, setSprintId] = useState(null);
  const formik = useFormik({
    initialValues: { hoursWasted: hoursWasted },
    validationSchema: schema,
  });
  const dispatch = useDispatch();
  const [currentDayHour, setcurrentDayHour] = useState(0);

  const deleteTask = (e) => {
    return dispatch(deleteSprintsTask(task._id ?? task.id));
  };
  console.log(formik);
  const onHandleClikc = (e) => {
    console.log(task._id ?? task.id);
    setSprintId(task._id ?? task.id);
    setIsOpen(true);
  };

  // const onHandleChange = (e) => {
  // sethoursWasted(e.target.value);
  // };

  useEffect(() => {
    if (
      Number(formik.values.hoursWasted) > 0 &&
      Number(formik.values.hoursWasted) <= 8 &&
      formik.values.hoursWasted !== ""
    ) {
      const taskObj = {
        date: targetDate,
        hours: Number(formik.values.hoursWasted),
      };
      dispatch(patchTaskHours({ sprintId, taskObj }));
    }
  }, [formik.values.hoursWasted]);

  useEffect(() => {
    if (task) {
      task.hoursWastedPerDay.filter((item) => {
        if (item.currentDay === targetDate)
          setcurrentDayHour(item.singleHoursWasted);
        sethoursWasted(item.singleHoursWasted);
      });
    }
    // setcurrentDayHour();
  }, [task, targetDate]);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    // console.log(taskObj);
    // console.log("sprintId", sprintId);
    // const TaskId = task._id ?? task.id;
  };

  return (
    <TaskListItemWrapper>
      <div className="TitleWrapper">
        {/* <div> */}
        <h3 className="TaskTitle">{task.title}</h3>
        <div className="TaskTitleAfter"></div>
        {/* </div> */}
      </div>
      <div className="TaskDescriptionTablet">
        <p className="describtion">
          <span className="describtionHour">Заплановано годин</span>
          <span className="describtionHourNumber">{task.hoursPlanned}</span>
        </p>
        <p className="describtion">
          <span className="describtionHour">Витрачено год / день</span>
          <span className="describtionNumber">{currentDayHour}</span>
          <button type="button" onClick={onHandleClikc}>
            Исправить
          </button>

          {isOpen && (
            // <form onSubmit={onHandleSubmit}>
            <input
              name="hoursWasted"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.hoursWasted}
            />
            // <button type="submit">Submit</button>
            // </form>
          )}
        </p>
        <p className="describtion describtionLastChild">
          <span className="describtionHour">Витрачено годин</span>
          <span className="describtionHourNumber">{task.hoursWasted}</span>
        </p>
        <div className="BtnDelete">
          <Button
            icon="delete"
            classBtn="editDelete"
            onHandleClick={deleteTask}
          />
        </div>
      </div>
      <div className="TaskDescriptionDesktop">
        <span className="describtionHourNumber">{task.hoursPlanned}</span>
        <span className="describtionNumber">{currentDayHour}</span>
        <span className="describtionHourNumber">
          {/* {task.hoursWastedPerDay.map((item) => item.singleHoursWasted)} */}
          {task.hoursWasted}
        </span>

        <div className="BtnDeleteDesktop">
          <Button
            icon="delete"
            classBtn="editDelete"
            onHandleClick={deleteTask}
          />
        </div>
      </div>
    </TaskListItemWrapper>
  );
};

export default TaskListItem;
