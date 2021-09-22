import TaskListItem from '../taskListItem/TaskListItem';
import { useState, useEffect } from 'react';
import { TasklistStyled } from './TaskListStyled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSprintsTasks } from '../../../redux/task/task-operations';
import { useParams } from 'react-router-dom';
import taskSelectors from '../../../redux/task/task-selectors';

const TaskList = ({ filter }) => {
  const tasks = useSelector(taskSelectors.getTasks);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [filtredTasks, setFiltredTasks] = useState([]);

  useEffect(() => {
    dispatch(getSprintsTasks(id));
  }, [id]);
  useEffect(() => {
    const res = tasks.filter((task) => task.title?.includes(filter));
    setFiltredTasks(res);
    console.log('filtered arr', filtredTasks);
  }, [filter]);

  return (
    <TasklistStyled>
      {filtredTasks.length === 0 &&
        filter.length === 0 &&
        tasks.map((item) => (
          <TaskListItem key={item._id ?? item.id} task={item} />
        ))}
      {filtredTasks.length > 0 &&
        filtredTasks.map((item) => (
          <TaskListItem key={item._id ?? item.id} task={item} />
        ))}
    </TasklistStyled>
  );
};

export default TaskList;
