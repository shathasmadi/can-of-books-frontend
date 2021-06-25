import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class FormBooks extends Component {
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form style={{ marginBottom: "20px", }}>
            <label style={{ marginLeft: "20px", marginRight: "5px" }}>Name of the Book</label>
            <input onChange={this.props.updateBookName} type="text"style={{marginLeft:"50px"}}/>

            <label style={{ marginLeft: "20px", marginRight: "5px" }}>Description of the Book</label>
            <input onChange={this.props.updateDiscOfBook} type="text"style={{marginLeft:"12px"}} />

            <label style={{ marginLeft: "20px", marginRight: "5px" }}>Status of the Book</label>
            <input onChange={this.props.updateStatusOfBook} type="text"style={{marginLeft:"50px"}} />
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.closeAddBookForm} variant="secondary">
            Close
          </Button>
          <Button
            onClick={(e) => {
              this.props.addBook(e);
              this.props.closeAddBookForm();
            }}
            style={{
              marginLeft: "20px",
              backgroundColor: "#5E8B7E",
              color: "white",
              border: "none",
            }}
          >
            Add New Book
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default FormBooks;
