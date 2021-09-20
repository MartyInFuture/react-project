import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMember } from "../../../redux/addMembers/addMembers-operations"
import { existingMembers } from "../../../redux/addMembers/addMembers-selectors"
import SubmitButton from "../../common/submitButton/SubmitButton"
import { WrapperForm } from "./MembersFormStyled"
import MembersList from "./MembersList"

const MembersForm = () => {
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    setEmail(e.currentTarget.value)
  }

  const members = useSelector(existingMembers)

  const dispatch = useDispatch()

  const onHandleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMember({ email }, email))
    setEmail("")
  }

  return (
    <WrapperForm>
      <form onSubmit={onHandleSubmit}>
        <label>
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            placeholder="Введіть email"
            required
            onChange={handleChange}
          />
        </label>
        <h3 className="inputTitle">Додані користувачі:</h3>
        {members?.length ? (
          <MembersList className="infoText" />
        ) : (
          <p className="infoText">Ви ще не додали жодного користувача</p>
        )}
        <div className="submitWrapper">
          <SubmitButton nameBtn="Готово" />
        </div>
      </form>
    </WrapperForm>
  )
}

export default MembersForm
