import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMember } from "../../../redux/addMembers/addMembers-operations"
import { existingMembers } from "../../../redux/addMembers/addMembers-selectors"
import SubmitButton from "../../common/submitButton/SubmitButton"
import { WrapperForm } from "./MembersFormStyled"
import MembersList from "./MembersList"
import { useParams } from "react-router-dom"

const MembersForm = () => {
  const [email, setEmail] = useState("")

  const { id } = useParams()

  const handleChange = (e) => {
    setEmail(e.currentTarget.value)
  }

  const members = useSelector((state) => {
    console.log("id", id)
    return state.projects.filter((project) => project._id === id)[0].members
  })
  console.log("m", members)

  const dispatch = useDispatch()

  const onHandleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMember({ id, email: { email } }))
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
          <MembersList members={members} />
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
