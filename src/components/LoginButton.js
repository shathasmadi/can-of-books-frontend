import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      style={{
        float: "right",
        marginRight: "30px",
        marginTop: "10px",
        width: "100px",
        height: "30px",
        borderRadius: "3px",
        border: "solid 1px gry",
        boxShadow: "none",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
