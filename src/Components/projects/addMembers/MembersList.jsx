import { useSelector } from 'react-redux';
import { existingMembers } from '../../../redux/addMembers/addMembers-selectors';

const MembersList = () => {
  const arrayMembers = useSelector(existingMembers);

  return (
    <ul>
      {arrayMembers?.map(({ id, email }) => (
        <li key={id}>
          <p>{email}</p>
        </li>
      ))}
    </ul>
  );
};

export default MembersList;
