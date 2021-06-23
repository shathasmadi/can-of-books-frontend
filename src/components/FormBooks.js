import React, { Component } from "react";

export class FormBooks extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.addBook(e)} style={{ marginBottom: "20px" }}>
          <label style={{ marginLeft: "20px", marginRight: "5px" }}>Name of the Book</label>
          <input onChange={this.props.updateBookName} type="text" />

          <label style={{ marginLeft: "20px", marginRight: "5px" }}>Description of the Book</label>
          <input onChange={this.props.updateDiscOfBook} type="text" />

          <label style={{ marginLeft: "20px", marginRight: "5px" }}>Status of the Book</label>
          <input onChange={this.props.updateStatusOfBook} type="text" />

          <input
            type="submit"
            value="Add New Book"
            style={{ marginLeft: "20px", backgroundColor: "#5E8B7E", color: "white", border: "none" }}
          />
        </form>
      </div>
    );
  }
}

export default FormBooks;
