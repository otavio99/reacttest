import React, { useContext } from "react";
import {Route, Redirect} from 'react-router-dom';
import {authContext} from './ProvideAuth';

function AuthGuard (props) {
  const { isAuthenticated } = useContext(authContext);
  const goTo = isAuthenticated? props.children : <Redirect to="/login" />

  return(
    <Route>
      {goTo}
    </Route>
  );
}

export default AuthGuard;
