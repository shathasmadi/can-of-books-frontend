import { React, Component } from "react";

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.update(e)}>
          <fieldset>
            <label style={{ marginLeft: "20px", marginRight: "5px" }}>Name of the Book</label>
            <input defaultValue={this.props.book.name} onChange={(e) => this.props.updateBookName(e)} type="text" />

            <label style={{ marginLeft: "20px", marginRight: "5px" }}>Description of the Book</label>
            <input
              defaultValue={this.props.book.description}
              onChange={(e) => this.props.updateDiscOfBook(e)}
              type="text"
            />

            <label style={{ marginLeft: "20px", marginRight: "5px" }}>Status of the Book</label>
            <input
              defaultValue={this.props.book.status}
              onChange={(e) => this.props.updateStatusOfBook(e)}
              type="text"
            />

            <input
              type="submit"
              value="Update Book"
              style={{ marginLeft: "20px", backgroundColor: "#5E8B7E", color: "white", border: "none" }}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
