import React, { Suspense } from "react";
import Button from "./common/button/Button";
import Header from "./header/Header";
import { Route, Switch } from "react-router";
import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";

import GlobalStyle from "../style/GlobalStyle";
import Register from "../pages/Register";
import Login from "../pages/Login";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Switch>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </MainContainer>
    </>
  );
};

export default App;
