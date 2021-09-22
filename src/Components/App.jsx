import React, { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router";
import { authSelectors } from "../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../redux/auth/auth-operations";
import { getErorrMessage } from "../redux/error/error-selector";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublickRoute";
import Header from "./header/Header";
import MainContainer from "./common/containers/mainContainer/Container";
import GlobalStyle from "../style/GlobalStyle";
import WrapperContainer from "./common/containers/WrapperContainer/WrapperContainer";
import { resetErrorAction } from "../redux/error/error-action";
import LoaderSpinner from "./loader/Loader";

const Register = lazy(() => import("../pages/register/Register"));
const Login = lazy(() => import("../pages/login/Login"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Sprints = lazy(() => import("../pages/sprints/Sprint"));
const Tasks = lazy(() => import("../pages/tasks/Tasks"));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getAccessToken);
  const errorMessage = useSelector(getErorrMessage);

  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    errorMessage && dispatch(resetErrorAction());
  }, [errorMessage]);

  useEffect(() => {
    token.set(isAuth);
  }, []);

  return (
    <>
      <GlobalStyle />
      {isFetchingUser || (
        <>
          <Header />
          <MainContainer>
            <WrapperContainer>
              <Switch>
                <Suspense fallback={<LoaderSpinner />}>
                  <PublicRoute path="/register" exact restricted>
                    <Register />
                  </PublicRoute>
                  <PublicRoute path="/login" exact restricted>
                    <Login />
                  </PublicRoute>
                  <PrivateRoute path="/" exact>
                    <Projects />
                  </PrivateRoute>
                  <PrivateRoute path="/project/:id" exact>
                    <Sprints />
                  </PrivateRoute>
                  <PrivateRoute path="/project/:id/sprint/:id" exact>
                    <Tasks />
                  </PrivateRoute>
                </Suspense>
              </Switch>
            </WrapperContainer>
          </MainContainer>
        </>
      )}
    </>
  );
};

export default App;
