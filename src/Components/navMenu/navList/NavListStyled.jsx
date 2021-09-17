import styled from "styled-components";

export const List = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 165px;
  }

  .item {
    display: flex;
    margin-bottom: 32px;
    align-items: center;
  }
  .logo {
    min-width: 36px;
    width: 36px;
    height: 36px;
    margin-right: 15px;

    border-radius: 5px;
  }
`;
