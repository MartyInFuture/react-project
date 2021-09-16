import Button from "./common/button/Button";
import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";
import NavContainer from "./common/containers/navContainer/NavContainer";
import WrapperContainer from "./common/containers/WrapperContainer/WrapperContainer";

const App = () => {
  return (
    <>
      <div>app</div>
      <MainContainer>
        <WrapperContainer>
          <NavContainer>
            <Button classBtn="edit" />
          </NavContainer>
          <ContentContainer>
            <Button classBtn="edit" />
          </ContentContainer>
        </WrapperContainer>
      </MainContainer>
    </>
  );
};

export default App;
