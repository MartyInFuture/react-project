import React, { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router';
import { authSelectors, authOperations } from '../redux/auth';
import { useSelector, useDispatch } from 'react-redux';

import PrivateRoute from './routers/PrivateRoute';
import PublicRoute from './routers/PublickRoute';
import Header from './header/Header';
import MainContainer from './common/containers/mainContainer/Container';
import GlobalStyle from '../style/GlobalStyle';
import WrapperContainer from './common/containers/WrapperContainer/WrapperContainer';

const App = () => {
  const Register = lazy(() => import('../pages/register/Register'));
  const Login = lazy(() => import('../pages/login/Login'));
  const Projects = lazy(() => import('../pages/projects/Projects'));
  const Sprints = lazy(() => import('../pages/Sprint'));
  const Tasks = lazy(() => import('../pages/tasks/Tasks'));
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {isFetchingUser || (
        <>
          <Header />
          <MainContainer>
            <WrapperContainer>
              <Switch>
                <Suspense fallback={''}>
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
