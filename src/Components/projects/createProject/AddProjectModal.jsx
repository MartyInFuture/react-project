import React, { useState } from "react"
import { useDispatch } from "react-redux"

import SubmitButton from "../../common/submitButton/SubmitButton"
import { WrapperForm } from "./AddProjectModalStyled"

const AddProjectModal = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleChangeTitle = (e) => {
    setTitle(e.currentTarget.value)
  }

  const handleDescription = (e) => {
    setDescription(e.currentTarget.value)
  }

  const dispatch = useDispatch()

  const onHandleSubmit = (e) => {
    e.preventDefault()
    // dispatch(addProject({ title, description }, title))
    setTitle("")
    setDescription("")
  }

  return (
    <WrapperForm>
      <form className="form" onSubmit={onHandleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            name="title"
            value={title}
            placeholder="Назва проекту"
            required
            onChange={handleChangeTitle}
          />
        </label>

        <label>
          <h3 className="inputTitle">Опис</h3>
          <input
            type="text"
            className="input"
            name="description"
            value={description}
            required
            onChange={handleDescription}
          />
        </label>
        <div className="submitWrapper">
          <SubmitButton nameBtn="Готово" />
        </div>
      </form>
    </WrapperForm>
  )
}

export default AddProjectModal
