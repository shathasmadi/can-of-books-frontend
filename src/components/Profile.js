import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { withAuth0 } from "@auth0/auth0-react";

export class Profile extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div style={{ backgroundColor: "#DFEEEA" }}>
        {isAuthenticated && (
          <Card
            text="white"
            className="text-center p-3"
            style={{
              width: "25%",
              margin: "Auto",
              marginBottom: "30px",
              marginTop: "30px",
              backgroundColor: "#A7C4BC",
            }}
          >
            <Image
              style={{ width: "100%" }}
              src={this.props.auth0.user.picture}
              alt={this.props.auth0.user.name}
              rounded
            />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{this.props.auth0.user.name}</Card.Title>
              <Card.Text style={{ color: "black" }}>{this.props.auth0.user.email}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);
