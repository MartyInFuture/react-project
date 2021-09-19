import { useSelector } from 'react-redux';
import { existingMembers } from '../../../redux/addMembers/addMembers-selectors';

import Modal from '../../common/modal/Modal';
import MembersForm from './MembersForm';


const CreateMembers = () => {
  
  return (
    <Modal>
      <MembersForm />  
    </Modal>
  );
};

export default CreateMembers;
