
import Button from './common/button/Button';
import Header from './header/Header';
// import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";

import GlobalStyle from "../style/GlobalStyle";
import ProjectsPage from '../pages/Projectspage/ProjectsPage';


const App = () => {
  return (
    <>

    <GlobalStyle />
    <Header />
      <MainContainer>
        {/* <WrapperContainer>
        </WrapperContainer> */}
        <ProjectsPage>
          <Button/>
        </ProjectsPage>

      </MainContainer>
      
    </>
  );
};

export default App;
