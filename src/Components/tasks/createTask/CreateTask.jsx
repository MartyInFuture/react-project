import Modal from "../../common/modal/Modal"
import TaskForm from "./TaskForm"

const CreateTask = () => {
  return (
    <Modal nameForm="Створення задачі">
      <TaskForm />
    </Modal>
  )
}

export default CreateTask
