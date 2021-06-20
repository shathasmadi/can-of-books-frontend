import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      style={{
        float: "right",
        marginRight: "30px",
        marginTop: "10px",
        border: "none",
        width: "100px",
        height: "30px",
        borderRadius: "3px",
      }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
