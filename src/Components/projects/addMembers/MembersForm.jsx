import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addMember } from "../../../redux/addMembers/addMembers-operations"
import SubmitButton from '../../common/submitButton/SubmitButton';
import { WrapperForm } from './MembersFormStyled';
import MembersList from './MembersList';
import { useParams } from 'react-router-dom';
import projectOperations from '../../../redux/projects/projects-operations';

const MembersForm = ({ setOpenModal }) => {
  const [email, setEmail] = useState('');

  const { id } = useParams();

  const handleChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const members = useSelector((state) => {
    return state.projects.filter((project) => project._id === id)[0].members;
  });
  useEffect(() => {
    console.log('hello');
  }, [members]);

  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(projectOperations.addMember({ id, email: { email } }));
    setEmail('');
    setOpenModal(false);
  };

  return (
    <WrapperForm>
      <form onSubmit={onHandleSubmit}>
        <label>
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            placeholder="Введіть email"
            required
            onChange={handleChange}
          />
        </label>
        <h3 className="inputTitle">Додані користувачі:</h3>
        {members?.length ? (
          <MembersList members={members} />
        ) : (
          <p className="infoText">Ви ще не додали жодного користувача</p>
        )}
        <div className="submitWrapper">
          <SubmitButton nameBtn="Готово" />
        </div>
      </form>
    </WrapperForm>
  );
};

export default MembersForm;
