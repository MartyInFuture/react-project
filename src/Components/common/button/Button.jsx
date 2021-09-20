import { ButtonWrapper } from './ButtonStyled';

const Button = ({ onHandleClick, icon = 'add', classBtn = 'add' }) => {
  console.log(onHandleClick);
  return (
    <ButtonWrapper>
      <button
        type="button"
        className={`${classBtn} btnCommon`}
        onClick={onHandleClick}
      >
        <span className="material-icons-outlined icon">{icon}</span>
      </button>
    </ButtonWrapper>
  );
};
export default Button;
