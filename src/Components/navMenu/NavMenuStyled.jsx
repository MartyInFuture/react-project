import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: auto;

  .add {
    margin: 0 auto 15px auto;
  }
  .text {
    text-align: center;
  }
  .button__wrapper {
    margin-top: 50px;
  }
  .arrow {
    display: inline-block;
    transform: rotate(180deg);
    font-size: 35px;
    color: #181c27;
    font-weight: 100;
  }
  .goBack {
    text-decoration: none;
    display: flex;
    align-items: center;

    color: #181c27;
  }
  .button-title {
    margin-left: 21px;
    max-width: 115px;
    font-family: Montserrat;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }
`;
