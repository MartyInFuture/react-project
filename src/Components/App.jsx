import React, { Suspense } from "react";
import Button from "./common/button/Button";
import Header from "./header/Header";
import { Route, Switch } from "react-router";
import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";
import GlobalStyle from "../style/GlobalStyle";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Projects from "../pages/projects/Projects";
import NavContainer from "./common/containers/navContainer/NavContainer";
import Tasks from '../pages/tasks/Tasks'

import WrapperContainer from "./common/containers/WrapperContainer/WrapperContainer";
import NavMenu from "./navMenu/NavMenu";



const App = () => {
  return (
    <>
      <GlobalStyle />

      <div>app</div>

      <Header />
      <MainContainer>
        <WrapperContainer>
          <Switch>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
          </Switch>
        </WrapperContainer>
      </MainContainer>
    </>
  );
};

export default App;
