import React, { useState } from "react"  
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from "../../../redux/task/task-operations";

import SubmitButton from "../../common/submitButton/SubmitButton";

const TaskForm = () => {
    const [title, setTitle] = useState("")
    const [hoursPlanned, setHoursPlanned] = useState("")

    const handleChangeTitle = (e) => {
    setTitle(e.currentTarget.value)
  }

    const handleHoursPlanned = (e) => {
    setHoursPlanned(e.currentTarget.value)
  }
    

  const dispatch = useDispatch();
     
    const onHandleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({ title, hoursPlanned }, title))
    setTitle("")
    setHoursPlanned("")
    }
 
    return (
        <form onSubmit ={onHandleSubmit}>
            <h2>Створення задачі</h2>
            <label>        
        <input
          type="text"
          name="title"
          value={title}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder ="Назва задачі"
          required
          onChange={handleChangeTitle}          
        />
        </label>
            
    <label>        
        <input
          type="number"
          name="hoursPlanned"
          value={hoursPlanned}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder ="Заплановано годин"
          required
          onChange={handleHoursPlanned}          
        />
            </label>
            <SubmitButton nameBtn='Готово'/>
            
        </form>
    );
}

export default TaskForm;