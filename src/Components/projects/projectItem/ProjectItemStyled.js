import styled from 'styled-components';

export const ProjectItemStyled = styled.li`
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  margin-right: 30px;
  :hover,
  :focus {
    box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
  }
  .projectLink {
    text-decoration: none;
    color: white;
    display: block;
    width: 270px;
    height: 270px;
    padding: 30px;
    background-color: skyblue;
    border-radius: 5px;
    cursor: pointer;
  }
  .projectTitle {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 0.04rem;
  }
  .projectTextWrapper {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    padding: 30px;
    width: 100%;
    height: 100%;

    transform: translateY(100%);
    transition: transform 250ms ease-out;
  }
  .projectLink:hover .projectTextWrapper,
  .projectLink:focus .projectTextWrapper {
    transform: translateY(0%);
  }
  .projectTextDescription {
  }
  .projectButtonWrapper {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

// const colors = ['red', 'black', 'orange'];

// const randomBackgroud = (colors) => {
//   const randomIndex = Math.round(Math.random() * colors.length);

//   return colors[randomIndex];
// };
