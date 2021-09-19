import React, { useState } from "react"
import { useDispatch } from "react-redux"

import SubmitButton from "../../common/submitButton/SubmitButton"

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
    <form onSubmit={onHandleSubmit}>
      <h2>Створення проекту</h2>
      <label>
        <h3>Назва проекту</h3>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Назва проекту"
          required
          onChange={handleChangeTitle}
        />
      </label>

      <label>
        <h3>Опис</h3>
        <input type="text" name="description" value={description} required onChange={handleDescription} />
      </label>
      <SubmitButton nameBtn="Готово" />
    </form>
  )
}

export default AddProjectModal
