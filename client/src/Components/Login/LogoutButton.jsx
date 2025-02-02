import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (props) => {
  const { logout } = useAuth0();

  return (
    <p onClick={() => logout({ returnTo: window.location.origin })}>
      {props.text}
    </p>
  );
};

export default LogoutButton;
