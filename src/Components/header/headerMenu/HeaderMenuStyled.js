import styled from "styled-components";

export const HeaderMenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-left: auto;

  .userEmail {
    margin-right: 10px;
    font-weight: 600;
    @media (min-width: 768px) {
      margin-right: 70px;
    }
  }
  .logOutButton {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(24, 28, 39, 0.6);
  }
  .icon {
    font-size: 16px;
  }
`;
