import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({ children, redirectTo = '/register', ...props }) => {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...props}>
      {isLogedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};
export default PrivateRoute;