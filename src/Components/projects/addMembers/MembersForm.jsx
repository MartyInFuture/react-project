import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addMember } from '../../../redux/addMembers/addMembers-operations';
import { existingMembers } from '../../../redux/addMembers/addMembers-selectors';
import SubmitButton from '../../common/submitButton/SubmitButton';
import MembersList from './MembersList';

const MembersForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.currentTarget.value);
  };

   const members = useSelector(existingMembers);

  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMember({ email }, email));
    setEmail('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <h2>Додати людей</h2>
      <label>
        <input
          type="email"
          name="email"
          value={email}       
          placeholder="Введіть email"
          required
          onChange={handleChange}
        />
      </label>
      {members?.length ? (
        <MembersList />
      ) : (
        <p>Ви ще не додали жодного користувача</p>
      )}
      <SubmitButton nameBtn="Готово" />
    </form>
  );
};

export default MembersForm;
