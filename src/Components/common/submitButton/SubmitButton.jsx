import { ButtonSubmitWrapper } from "./SubmitButtonStyled";

const SubmitButton = ({ onHandleSubmit, classBtn = 'register', nameBtn ='Зареєструватися'}) => {
    return (
        <ButtonSubmitWrapper> 
            <button type='submit'  className={`${classBtn} btnSubCommon`}> {nameBtn }                 
             </button>
        </ButtonSubmitWrapper>
    );
}

export default SubmitButton;