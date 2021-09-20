import Modal from "../../common/modal/Modal";
import AddSprintForm from "../addSprintForm/AddSprintForm";

const CreateSprint = () => {
  return (
    <Modal nameForm="Створення спринта">
      <AddSprintForm />
    </Modal>
  );
};

export default CreateSprint;
