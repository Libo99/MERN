import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Login from "./Login/Login";
import {Route} from 'react-router-dom';

const PrivateRoute = ({ component, ...props }) => (
  <Route
    component={
      withAuthenticationRequired(component,
      {
        onRedirecting: () => <Login />,
      })
    }
    {...props}
  />
);



export default PrivateRoute;
