import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext(); // will remove later
  const { user } = useAuth0();
  console.log('children', children);
  console.log('...rest', rest);
  console.log('myUser', myUser);
  console.log('user', user);

  return (
    <Route
      {...rest}
      render={() => {
        // return myUser ? children : <Redirect to='/'></Redirect>;
        return user ? children : <Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
