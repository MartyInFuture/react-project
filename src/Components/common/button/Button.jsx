import { ButtonWrapper } from "./ButtonStyled";


const Button = ({onHandleClick, icon='add', classBtn='add'}) => {
    return (
        <ButtonWrapper> 
            <button type='button' className={classBtn}>
               <span className='material-icons'>{icon}</span>
             </button>
        </ButtonWrapper>
    );
}

export default Button;   