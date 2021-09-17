
import Button from './common/button/Button';
import Header from './header/Header';
import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";
import Tasks from '../pages/Tasks'
import GlobalStyle from "../style/GlobalStyle";


const App = () => {
  return (
    <>

      

    <GlobalStyle />
    <Header />
      <MainContainer>
        {/* <WrapperContainer>
        </WrapperContainer> */}
        <Tasks />
      </MainContainer>
      
    </>
  );
};

export default App;
