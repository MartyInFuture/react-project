import { useSelector } from "react-redux"
import { getMembersFromState } from "../../../redux/addMembers/addMembers-selectors";

import Modal from "../../common/modal/Modal";
import MembersForm from "./MembersForm";
import MembersList from "./MembersList";

const createMembers = () => {

    const members = useSelector(getMembersFromState)
    return (
        <Modal>
            <MembersForm />
            {members?.length ? <MembersList /> : <p>Ви ще не додали жодного користувача</p>}           
        </Modal>
    );
}

export default createMembers;