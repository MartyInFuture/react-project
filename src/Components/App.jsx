import Button from "./common/button/Button";
import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";

import GlobalStyle from "../style/GlobalStyle";


const App = () => {
  return (
    <>
    <GlobalStyle />
      <div>app</div>
      <MainContainer>
        <WrapperContainer>
        </WrapperContainer>
      </MainContainer>
      
    </>
  );
};

export default App;
