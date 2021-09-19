import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelectors } from "../../redux/auth";

export const PrivateRoute = function ({ children, routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="login" />}
    </Route>
  );
};

export const PublicRoute = function ({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {!shouldRedirect ? children : <Redirect to="/" />}
    </Route>
  );
};
