import Modal from "../../common/modal/Modal"
import MembersForm from "./MembersForm"

const CreateMembers = ({ closeModal, setCloseModal }) => {
  return (
    <Modal nameForm="Додати людей" closeModal={closeModal} setCloseModal={setCloseModal}>
      <MembersForm />
    </Modal>
  )
}

export default CreateMembers
