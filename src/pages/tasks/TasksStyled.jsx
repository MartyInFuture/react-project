import styled from 'styled-components';

export const TasksStyled = styled.div`
    .TaskWrapper {
        display: flex;
        margin-bottom: 30px;
    }

    .SprintTitleBtnEditWrapper {
            display: flex;
    }

    .btnEditTitle {
        display: flex;
        align-items: center;
    }
    
    

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
        position: relative;
    }

    .iconSearch {
        font-size: 20px;
        color: #A6A6A6;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .inputSearch {
        width: 100%;
        height: 40px;
        padding-left: 30px;
        border: none;
        border-bottom: 1px solid rgba(24, 28, 39, 0.1);
    }

    .iconSearchTablet {
        display: none;
        font-size: 20px;
        color: #A6A6A6;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .discrbtionHoursContainer {
        display: none;
    }

    .discrbtionHoursContainerAfter {
        display: none;
    }

    .btnAddTitleTablet {
        display: none;
    }

    .AddTaskParagraph {
        display: none;
    }

    /* .hidden {
        display: none;
    } */

    /* .inputSearch:focus {
        border-color: red !important;
    } */

    /* ============================================= Tablet ================================================================= */
    @media screen and (min-width: 768px) {
        .counterSearchContainer {
                display: flex;
        }

        .inputSearch {
            width: 214px;
        }

        .iconSearch {
            display: none;
        }

        .iconSearchTablet {
            display: block;
        }

        .inputSearch {
            padding-left: 2px;
            padding-right: 30px;
        }
        .inputBox {
            margin-bottom: 0px;
        }

        .counterSearchContainer {
            margin-bottom: 8px;
        }

        .discrbtionHoursContainer {
            display: flex;
            justify-content: space-between;
            
        }

        .discrbtionHours {
            width: 93px;
            font-size: 14px;
            line-height: 1.21;
            color: #181C27;
        }

        .TaskWrapper {
            margin-bottom: 24px;
        }

        .discrbtionHoursContainerAfter {
            display: block;
            margin-top: 10px;
            margin-bottom: 20px;
            border: 1px solid rgba(24, 28, 39, 0.1);
        }

        .btnAddTitle {
            display: none;
        }

        .btnAddTitleTablet {
            display: block;
        }

        .TaskTitleWrapper {
            margin-right: 20px;
        }

        .btnEditTitle {
            margin-right: 34px;
        }

        .btnAddchartTitle {
            display: none;
        }
    }
    /* ============================================= Desktop ================================================================= */
    @media screen and (min-width: 1280px) {
        .TaskTitleWrapper {
            margin-right: 43px;
        }

        .AddTaskParagraph {
            display: flex;
            align-items: center;

        }
        .btnAddTitleTablet {
             display: flex;
            align-items: center;

        }

        .btnEdit {
            margin-right: 20px;
        }

        
        .btnEditTitle {
            margin-right: 0px;
        }

        .TaskWrapper {
            justify-content: space-between;
        }

        .inputSearch {
            display: none;
        }
        .iconSearchTablet {
            display: none;
        }

        .buttonCounterLeft {
            margin-left: 0px;
        }

        .discrbtionHoursContainer {
            display: none;
        }

        .discrbtionHoursContainerDesktop {
            display: flex;
            justify-content: space-between;
        }

        .SearchDesktop {
            position: relative;
        }

        .iconSearchDesktop {
            font-size: 20px;
            color: #A6A6A6;
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .inputSearchDesktop {
            width: 100%;
            height: 40px;
            border: none;
            border-bottom: 1px solid rgba(24, 28, 39, 0.1);

        }

        /* .inputSearchDesktop:active,
                            :hover,
                            :focus
                            {
                            outline: 0;
                            outline-offset: 0;
                            background-color: transparent;
                            } */
    }

    
`;