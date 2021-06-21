import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
  }
  componentDidMount = async () => {
    // const { user } = this.props.auth0;
    const myBooks = `${process.env.REACT_APP_SERVER_URL}/books?email=archaseel.1992@gmail.com`;
    // const myBooks = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;
    const showApiUrlBook = await axios.get(myBooks);
    this.setState({ book: showApiUrlBook.data[0].books });
  };
  render() {
    return (
      <>
        {this.state.book.length > 0 &&
          this.state.book.map((element) => {
            return (
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ backgroundColor: "#845460", color: "#E2BCB7" }} as="li">
                    book Name:
                    {element.name}
                  </ListGroup.Item>
                  <ListGroup.Item>description: {element.description}</ListGroup.Item>
                  <ListGroup.Item>status: {element.status}</ListGroup.Item>
                </ListGroup>
              </Card>
            );
          })}
      </>
    );
  }
}

export default withAuth0(BestBooks);
