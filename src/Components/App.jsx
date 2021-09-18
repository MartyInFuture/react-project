import React, { Suspense } from "react";
import Button from "./common/button/Button";
import Header from "./header/Header";
import { Route, Switch } from "react-router";
import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";
import WrapperContainer from "../Components/common/containers/WrapperContainer/WrapperContainer";
import GlobalStyle from "../style/GlobalStyle";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

import Projects from "../pages/projects/Projects";

import Tasks from "../pages/Tasks";

const App = () => {
  return (
    <>
      <GlobalStyle />
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
          {/* <Projects /> */}
        </WrapperContainer>
      </MainContainer>
    </>
  );
};

export default App;
