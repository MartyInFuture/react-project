// import Button from '../Components/common/button/Button';
import Button from '../../../Components/common/button/Button'
import {TaskListItemWrapper} from './TaskListItemStyled'

const TaskListItem = ({task}) => {

    const deleteTask = () => {
        console.log("deleteTask()");
    }
    

    return (
        <TaskListItemWrapper key={task._id}>
            <h3 className="TaskTitle">{task.title}</h3>
            <div className="TaskTitleAfter"></div>
            <p className="describtion"><span className="describtionHour">Заплановано годин</span><span className="describtionHour">{task.hoursPlanned}</span></p>
            <p className="describtion"><span className="describtionHour">Витрачено год / день</span><span className="describtionNumber">{task.hoursWasted}</span></p>
            <p className="describtion describtionLastChild"><span className="describtionHour">Витрачено годин</span><span className="describtionHour">{task.hoursWastedPerDay.map(item => (
                item.singleHoursWasted
            ))}</span></p>
            <div className="BtnDelete">
               <Button icon='delete' classBtn='editDelete'/>
            </div>
            
        </TaskListItemWrapper>
    );
}

export default TaskListItem;

