import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BookFormModal from './BookFormModal';
import Button from 'react-bootstrap/Button';





class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: [],

      name: '',
      description: '',
      status: ''

    }


  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    const myBooks = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;
    const showApiUrlbook = await axios.get(myBooks);
    this.setState({ book: showApiUrlbook.data });
  }

  addBook = async (e) => {
    e.preventDefault();

    // sending the request to backend 
    const bodyData = {
      name: this.state.name,
      status: this.state.status,
      description: this.state.description,
      email: this.props.auth0.user.email

    }
    const newBook = await axios.post(`${this.state.server}/book`, bodyData);


    this.setState({
      book: newBook.data
    })
  }



  updateBookName = (e) => this.setState({ name: e.target.value });
  updateDiscOfBook = (e) => this.setState({ description: e.target.value });
  updateStatusOfBook = (e) => this.setState({ status: e.target.value });

  addBook = async (e) => {
    e.preventDefault();

    const bodyData = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      email: this.props.auth0.user.email

    }

    const newBook = await axios.post(`${process.env.REACT_APP_SERVER_URL}/books`, bodyData);

    this.setState({
      book: newBook.data
    })
  }

  deleteBook = async (index) => {
    const newArrayOfBooks = this.state.book.filter((cat, idx) => {
      return idx !== index;
    });
    this.setState({
      book: newArrayOfBooks
    })

    const query = {
      email: this.props.auth0.user.email
    }
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/books/${index}`, { params: query })
  }

  render() {

    return (
  

      <Jumbotron   >
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        <BookFormModal
          addBook={this.addBook}

          updateBookName={this.updateBookName}
          updateDiscOfBook={this.updateDiscOfBook}
          updateStatusOfBook={this.updateStatusOfBook}
        />

        {
          this.state.book.map((element, indx) => {
            return (
              <>
                <Card style={{ width: '18rem', margin:'26px auto' }}>
                <ListGroup variant="flush">
                  <ListGroup.Item as="li">Book Name:
                {element.name}</ListGroup.Item>
                  <ListGroup.Item>Description: {element.description}</ListGroup.Item>
                  <ListGroup.Item>Status: {element.status}</ListGroup.Item>
                </ListGroup>
                
                <Button  className='m-3 btn btn-danger'  onClick={() => this.deleteBook(indx)}>Delete Book</Button>
                
              </Card>;
              </>
    )
  })
}


      </Jumbotron >
  
    );

  }
}


export default withAuth0(BestBooks);