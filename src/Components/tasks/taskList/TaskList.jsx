import TaskListItem from '../taskListItem/TaskListItem';
import { useState, useEffect } from 'react';
import { Tasklist } from './TaskListStyled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSprintsTasks } from '../../../redux/task/task-operations';
import { useParams } from 'react-router-dom';

const TaskList = ({ filtredTasks }) => {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSprintsTasks(id));
  }, []);

  return (
    <Tasklist>
      {/* filterText === "" && */}
      {tasks.map((item) => (
        <TaskListItem key={item._id} task={item} />
      ))}
    </Tasklist>
  );
};

export default TaskList;
