// import React, { Suspense } from "react";
// import Button from "./common/button/Button";
import Header from "./header/Header";
// import { Route, Switch } from "react-router";
// import ContentContainer from "./common/containers/contentContainer/ContentContainer";
import MainContainer from "./common/containers/mainContainer/Container";
import WrapperContainer from "../Components/common/containers/WrapperContainer/WrapperContainer";
import GlobalStyle from "../style/GlobalStyle";
// import Register from "../pages/register/Register";
// import Login from "../pages/login/Login";
// import Projects from "../pages/projects/Projects";
// import Tasks from "../pages/Tasks";
// import { PrivateRoute, PublicRoute } from "./helpers/functionHelp";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <WrapperContainer>
          {/* <Switch>
            <PublicRoute path="/register" exact restricted>
              <Register />
            </PublicRoute>
            <PublicRoute path="/login" exact restricted>
              <Login />
            </PublicRoute>
            <PrivateRoute path="/" exact>
              <Projects />
            </PrivateRoute>
          </Switch> */}
        </WrapperContainer>
      </MainContainer>
    </>
  );
};

export default App;
