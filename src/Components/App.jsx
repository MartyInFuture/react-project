import Header from './header/Header';
import MainContainer from './common/containers/mainContainer/Container';
import WrapperContainer from './common/containers/WrapperContainer/WrapperContainer';
import GlobalStyle from '../style/GlobalStyle';
import Projects from '../pages/projects/Projects';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <WrapperContainer>
          <Projects />
        </WrapperContainer>
      </MainContainer>
    </>
  );
};

export default App;
