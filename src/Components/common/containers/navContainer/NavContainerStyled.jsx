import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 216px;
    padding-top: 20px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    width: 200px;
    padding-bottom: 50px;
  }
`;
