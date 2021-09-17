import Button from "./common/button/Button";
import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";
import NavContainer from "./common/containers/navContainer/NavContainer";
import GlobalStyle from "../style/GlobalStyle";
import NavMenu from "./navMenu/NavMenu";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>app</div>
      <MainContainer>
        <NavContainer>
          <NavMenu />
        </NavContainer>
      </MainContainer>
    </>
  );
};

export default App;
