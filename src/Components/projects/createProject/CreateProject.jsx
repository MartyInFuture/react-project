import Modal from "../../common/modal/Modal"
import AddProjectModal from "./AddProjectModal"

const CreateProject = ({ closeModal, setCloseModal }) => {
  return (
    <Modal nameForm="Створення проекту" closeModal={closeModal} setCloseModal={setCloseModal}>
      <AddProjectModal />
    </Modal>
  )
}

export default CreateProject
