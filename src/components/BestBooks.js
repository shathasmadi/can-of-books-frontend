import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: [],

     
    }

}
    componentDidMount = async () => {
        const { user } = this.props.auth0;
        const myBooks = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;
        const showApiUrlbook = await axios.get(myBooks);
        console.log('hhhhhhhhhhhhhh');
        this.setState({ book: showApiUrlbook.data });
      }
      render() {

        return (
    
          <>
            <h1>My Favorite Books</h1>
            <p>
              This is a collection of my favorite books
            </p>
            {this.state.book.map(element => {
          return <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item as="li" active>book Name:
                {element.name}</ListGroup.Item>
              <ListGroup.Item>description: {element.description}</ListGroup.Item>
              <ListGroup.Item>status: {element.status}</ListGroup.Item>
            </ListGroup>  </Card>;
        })}

      </>

    );

  }
}


export default withAuth0(MyFavoriteBooks);