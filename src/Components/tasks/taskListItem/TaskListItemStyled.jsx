import styled from 'styled-components';

export const TaskListItemWrapper = styled.div`
    width: 280px;
    background: #FFFFFF;
    box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
    border-radius: 5px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10px;
    position: relative;

    .TaskTitle {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #181C27;
        letter-spacing: 0.04em;
        margin-bottom: 8px;
    }

    .TaskTitleAfter {
        width: 240px;
        margin-bottom: 20px;
        border: 1px solid rgba(24, 28, 39, 0.2);

    }

    .describtion {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .describtionLastChild {
        margin-bottom: 30px;
    }

    /* .describtion:last-child {
        background: #000;
    } */

    /* .describtion:last-child {
        width: 100%;
        display: flex;
        justify-content: space-between;
         margin-bottom: 50px;
    } */

    .describtionHour {
        font-size: 10px;
        line-height: 1.2;
    }

    .describtionNumber {
        display: flex;
        justify-content: end;
        font-size: 14px;
        line-height: 1.12;
        width: 60px;
        border-bottom: 1px solid rgba(24, 28, 39, 0.2);
    }
    .BtnDelete {
        position: absolute;
            bottom: 10px;
            right: 10px;
    }
`;