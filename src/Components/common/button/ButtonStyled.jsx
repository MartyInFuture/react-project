import styled from 'styled-components';

export const ButtonWrapper = styled.div`
.btnCommon {
border-radius: 50%;
border: none;
display: flex;
justify-content: center;
align-items: center;
color: white;
}

.add{
    width: 44px;
    height: 44px;
    font-size:26px;
    background-color: #FF6B08;     
    box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);   
}
/* стилі кнопки Add  підходять і для додати графік addchart */


.editDelete {
width: 20px;
height: 20px;
background-color:  #A6A6A6;
font-size: 13px;
}

.deleteProject{
    width: 34px;
    height: 34px;
    background-color: white;
    color: #ffffff4e;
}

.logout {
    font-size: 18px;
    color: #747474;
    background-color: transparent;
}

.logoutMob {
    font-size: 18px;    
    background-color: #A6A6A6;
    width: 30px;
    height: 30px;
}

.groupAdd {
    font-size: 18px;
    color:  #181C27;
    background-color: transparent;
}

.close {
    background-color: transparent;
    color: black;
}

.arrowBack {
    font-size: 16px;
   color: black;
    background-color: transparent;
}

.icon {
  font-size: inherit;
}
`

