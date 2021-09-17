import { ButtonSubmitWrapper } from "./SubmitButtonStyled";

const SubmitButton = ({ onHandleSubmit, nameBtn ='Зареєструватися'}) => {
    return (
        <ButtonSubmitWrapper> 
            <button type='submit'  className= 'btnSubCommon'> {nameBtn }                 
             </button>
        </ButtonSubmitWrapper>
    );
}

export default SubmitButton;