import React, { useState } from "react"
import { useDispatch } from 'react-redux'; 
import { addMember } from "../../../redux/addMembers/addMembers-operations";
import SubmitButton from "../../common/submitButton/SubmitButton";

const MembersForm = () => {
    const [email, setEmail] = useState("")

    const handleChange = (e) => {
    setEmail(e.currentTarget.value)
  }    

  const dispatch = useDispatch();
     
    const onHandleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMember({ email}, email))
    setEmail("")   
    }
 
    return (
        <form onSubmit ={onHandleSubmit}>
            <h2>Додати людей</h2>
            <label>        
        <input
          type="email"
          name="email"
          value={email}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder ="Введіть email"
          required
          onChange={handleChange}          
        />
        </label>                     
             <SubmitButton nameBtn='Готово'/>             
        </form>
    );
}

export default MembersForm;