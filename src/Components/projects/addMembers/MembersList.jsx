import { useSelector } from 'react-redux';
import { getMembersFromState } from '../../../redux/addMembers/addMembers-selectors';

const MembersList = () => {
  const arrayMembers = useSelector(getMembersFromState);

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
