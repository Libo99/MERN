import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (props) => {
  const { logout } = useAuth0();

  return (
    <button style={{}} onClick={() => logout({ returnTo: window.location.origin })}>
      {props.text}
    </button>
  );
};

export default LogoutButton;
