import Button from '../../common/button/Button';
import { TaskListItemWrapper } from './TaskListItemStyled';

const TaskListItem = ({ task }) => {
  const deleteTask = () => {
    console.log('deleteTask()');
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
          <span className="describtionNumber">{task.hoursWasted}</span>
        </p>
        <p className="describtion describtionLastChild">
          <span className="describtionHour">Витрачено годин</span>
          <span className="describtionHourNumber">
            {task.hoursWastedPerDay.map((item) => item.singleHoursWasted)}
          </span>
        </p>
        <div className="BtnDelete">
          <Button icon="delete" classBtn="editDelete" />
        </div>
      </div>
      <div className="TaskDescriptionDesktop">
        <span className="describtionHourNumber">{task.hoursPlanned}</span>
        <span className="describtionNumber">{task.hoursWasted}</span>
        <span className="describtionHourNumber">
          {task.hoursWastedPerDay.map((item) => item.singleHoursWasted)}
        </span>

        <div className="BtnDeleteDesktop">
          <Button icon="delete" classBtn="editDelete" />
        </div>
      </div>
    </TaskListItemWrapper>
  );
};

export default TaskListItem;
