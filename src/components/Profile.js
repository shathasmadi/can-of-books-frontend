import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

export class Profile extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated && (
        <div>
          <img src={this.props.auth0.user.picture} alt={this.props.auth0.user.name} />
          <h2> {this.props.auth0.user.name} </h2>
          <p> {this.props.auth0.user.email} </p>
        </div>
      )
    );
  }
}

export default withAuth0(Profile);
