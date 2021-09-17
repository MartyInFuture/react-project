import styled from 'styled-components';

export const HeaderStyled = styled.div`
  padding: 15px 20px;
  border: 1px solid rgba(24, 28, 39, 0.1);
  @media (min-width: 768px) {
    padding: 20px 40px;
  }
  @media (min-width: 1280px) {
    padding: 20px 55px;
  }
  .logo {
    height: 30px;
    @media (min-width: 768px) {
      height: 40px;
    }
  }
`;
