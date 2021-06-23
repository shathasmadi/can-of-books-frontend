import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        style={{ backgroundColor: "#A7C4BC", display: "block", textAlign: "center" }}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand style={{ color: "#2F5D62" }}>&copy; Best Books</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
