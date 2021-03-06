import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import FormBooks from "./FormBooks";
import Button from "react-bootstrap/Button";
import UpdateForm from "./UpdateForm";
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBookForme: false,
      book: [],
      name: "",
      description: "",
      status: "",
      showUpdate: false,
      index: 0,
    };
  }

  showAddBookForme = () => {
    this.setState({ showAddBookForme: !this.state.showAddBookForme, showUpdate: false });
  };
  closeAddBookForm = () => {
    this.setState({ showAddBookForme: false, showUpdate: false });
  };

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    const myBooks = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;
    const showApiUrlBook = await axios.get(myBooks);
    this.setState({ book: showApiUrlBook.data.books });
  };

  updateBookName = (e) => this.setState({ name: e.target.value });
  updateDiscOfBook = (e) => this.setState({ description: e.target.value });
  updateStatusOfBook = (e) => this.setState({ status: e.target.value });

  addBook = async (e) => {
    e.preventDefault();
    const bodyData = {
      bookName: this.state.name,
      bookDescription: this.state.description,
      bookStatus: this.state.status,
      email: this.props.auth0.user.email,
    };
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/book`, bodyData).then((Response) => {
      this.setState({
        book: Response.data.books,
      });
    });
  };

  deleteBook = async (index) => {
    const query = {
      email: this.props.auth0.user.email,
    };
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/book/${this.state.book[index]._id}`, { params: query })
      .then((res) => {
        this.setState({
          book: res.data.books,
          showUpdate: false,
        });
      });
  };

  showUpdateForm = (idx) => {
    this.setState({
      index: idx,
      showUpdate: !this.state.showUpdate,
    });
  };

  update = async (e) => {
    e.preventDefault();
    const reqBody = {
      bookName: this.state.name,
      bookStatus: this.state.status,
      bookDescription: this.state.description,
      email: this.props.auth0.user.email,
    };
    console.log(reqBody);
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/book/${this.state.index}`, reqBody).then((response) => {
      this.setState({
        book: response.data.books,
      });
    });
  };

  render() {
    return (
      <Jumbotron style={{ backgroundColor: "#DFEEEA" }}>
        <Button
          onClick={this.showAddBookForme}
          style={{ marginBottom: "30px", backgroundColor: "#5E8B7E", color: "white", border: "none" }}
        >
          ADD A NEW BOOK
        </Button>
        {this.state.showAddBookForme && (
          <FormBooks
            closeAddBookForm={this.closeAddBookForm}
            addBook={this.addBook}
            updateBookName={this.updateBookName}
            updateDiscOfBook={this.updateDiscOfBook}
            updateStatusOfBook={this.updateStatusOfBook}
          />
        )}
        {this.state.showUpdate && (
          <UpdateForm
            update={this.update}
            updateBookName={this.updateBookName}
            updateDiscOfBook={this.updateDiscOfBook}
            updateStatusOfBook={this.updateStatusOfBook}
            book={this.state.book[this.state.index]}
          />
        )}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.book.map((element, indx) => {
            return (
              <>
                <Card style={{ width: "18rem", margin: "26px auto" }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item as="li">
                      Book Name:
                      {element.name}
                    </ListGroup.Item>
                    <ListGroup.Item>Description: {element.description}</ListGroup.Item>
                    <ListGroup.Item>Status: {element.status}</ListGroup.Item>
                  </ListGroup>
                  <Button
                    className="m-3 btn btn-danger"
                    onClick={() => this.deleteBook(indx)}
                    style={{ backgroundColor: "#2F5D62", color: "white", border: "none" }}
                  >
                    Delete Book
                  </Button>
                  <Button
                    className="m-3"
                    onClick={() => this.showUpdateForm(indx)}
                    style={{ backgroundColor: "#5E8B7E", color: "white", border: "none" }}
                  >
                    Update Book
                  </Button>
                </Card>
              </>
            );
          })}
        </div>
      </Jumbotron>
    );
  }
}
export default withAuth0(BestBooks);
