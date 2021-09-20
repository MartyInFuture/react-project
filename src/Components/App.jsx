import React, { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router";
import { authSelectors, authOperations } from "../redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { token } from "../redux/auth/auth-operations";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublickRoute";
import Header from "./header/Header";
import MainContainer from "./common/containers/mainContainer/Container";
import GlobalStyle from "../style/GlobalStyle";
import WrapperContainer from "./common/containers/WrapperContainer/WrapperContainer";
import operations from "../redux/auth/auth-operations";
import projectOperations from "../redux/projects/newProject/newProjects-operations";

const App = () => {
  // const isAuth = useSelector(authSelectors.getAccessToken);
  const Register = lazy(() => import("../pages/register/Register"));
  const Login = lazy(() => import("../pages/login/Login"));
  const Projects = lazy(() => import("../pages/projects/Projects"));
  const Sprints = lazy(() => import("../pages/sprintsPage/Sprint"));
  const Tasks = lazy(() => import("../pages/tasks/Tasks"));

  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   token.set(isAuth);
  //   isAuth && dispatch(projectOperations.getProjects());
  // }, [dispatch]);
  console.log(`app`, authOperations);

  return (
    <>
      <GlobalStyle />
      {isFetchingUser || (
        <>
          <Header />
          <MainContainer>
            <WrapperContainer>
              <Switch>
                <Suspense fallback={""}>
                  <PublicRoute path="/register" exact restricted>
                    <Register />
                  </PublicRoute>
                  <PublicRoute path="/login" exact restricted>
                    <Login />
                  </PublicRoute>
                  <PrivateRoute path="/" exact>
                    {/* <Projects /> */}
                    <Tasks />
                    {/* <Sprints /> */}
                  </PrivateRoute>
                  <PrivateRoute path="/project/:id" exact>
                    <Sprints />
                  </PrivateRoute>
                  <PrivateRoute path="/sprint/:id" exact>
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
