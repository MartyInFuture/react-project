import styled from 'styled-components';


export const CounterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .buttonCounter {
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
        /* width: 8px;
        height: 12px; */
        font-size: 18px;
    }

    .buttonCounterLeft {
        margin-right: 20px;
        margin-left: 20px;
    }

    .buttonCounterRight {
        margin-left: 20px;
    }

    .CounterInterfaceWrapper {
        display: flex;
    }

    .counterDay {
        font-size: 18px;
        /* font-weight: 400; */
    }

    .counterDate {
        font-size: 12px;
        color: rgba(24, 28, 39, 0.6);

    }
`