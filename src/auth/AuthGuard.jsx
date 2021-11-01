import React, { useContext } from "react";
import {Route, Redirect} from 'react-router-dom';
import {authContext} from './ProvideAuth';

function AuthGuard (props) {

  const userState = useContext(authContext);
  const goTo = userState.isAuthenticated ? <Redirect to="/login" /> : props.children

  return(
    <Route>
      {goTo}
    </Route>
  );
}

export default AuthGuard;
