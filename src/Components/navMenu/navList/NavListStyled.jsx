import styled from "styled-components";

export const List = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 60px;
    height: 340px;
    overflow: auto;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 165px;
  }

  .item {
    margin-bottom: 32px;
  }
  .logo {
    min-width: 36px;
    width: 36px;
    height: 36px;
    margin-right: 15px;

    border-radius: 5px;
  }
  .nav_link {
    display: flex;
    align-items: center;

    font-family: Montserrat;

    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: #181c27;
  }
  .nav_link__active {
    font-weight: bold;
  }
  .title {
    font-weight: inherit;
  }
`;
