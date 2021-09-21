import Modal from "../../common/modal/Modal";
import CreateSprintForm from "../createSprintForm/CreateSprintForm";

const CreateSprint = ({ closeModal, setOpenModal }) => {
  return (
    <Modal
      nameForm="Створення спринта"
      closeModal={closeModal}
      setCloseModal={setOpenModal}
    >
      <CreateSprintForm setOpenModal={setOpenModal} />
    </Modal>
  );
};

export default CreateSprint;
