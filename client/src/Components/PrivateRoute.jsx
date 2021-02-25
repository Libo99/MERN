import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import TodoForm from "./Todo/TodoForm";
import Login from "./Login/Login";

const PrivateRoute = () => {
  return <TodoForm />;
};

export default withAuthenticationRequired(PrivateRoute, {
  onRedirecting: () => <Login />,
});
