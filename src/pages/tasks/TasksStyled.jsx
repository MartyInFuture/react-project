import styled from 'styled-components';

export const TasksStyled = styled.div`
    .TaskWrapper {
        display: flex;
        margin-bottom: 30px;
    }

    .btnEditTitle {
        display: flex;
        align-items: center;
    }
    /* .btnEditTitleAfter {
        

    } */
    

    .btnAddTitle {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 2;
    }

    .btnAddchartTitle {
        position: fixed;
        left: 20px;
        bottom: 20px;
        z-index: 2;

    }
    

    .inputBox {
        margin-bottom: 20px;
    }

    .inputSearch {
        width: 100%;
        border: none;
        border-bottom: 1px solid rgba(24, 28, 39, 0.1);
    }

    /* .inputSearch:hover {
        border: none;
        border-bottom: orange;
    } */
`;