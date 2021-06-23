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
      <Navbar style={{ backgroundColor: "#A7C4BC", display: "block" }} collapseOnSelect expand="lg" variant="dark">
        <Link style={{ color: "#2F5D62", marginRight: "20px", fontSize: "20px" }} to="/">
          Home
        </Link>
        <Link style={{ color: "#2F5D62", fontSize: "20px" }} to="/profile">
          Profile
        </Link>
        <Navbar.Brand style={{ color: "#2F5D62", marginLeft: "33%", fontSize: "30px" }}>My Favorite Books</Navbar.Brand>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
