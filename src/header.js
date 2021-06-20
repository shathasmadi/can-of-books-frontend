import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./header.css";
import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar style={{ backgroundColor: "#845460", display: "block" }} collapseOnSelect expand="lg" variant="dark">
        <Link style={{ color: "#E2BCB7", marginRight: "20px" }} to="/">
          Home
        </Link>
        <Link style={{ color: "#E2BCB7" }} to="/profile">
          Profile
        </Link>
        <Navbar.Brand style={{ color: "#E2BCB7", marginLeft: "35%" }}>My Favorite Books</Navbar.Brand>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
