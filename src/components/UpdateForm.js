import { React, Component } from "react";

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.update(e)}>
          <fieldset>
            <legend>Update Form</legend>

            <label>Name of the Book</label>
            <input onChange={(e) => this.props.updateBookName(e)} type="text" />

            <label>status</label>
            <input onChange={(e) => this.props.updateStatusOfBook(e)} type="text" />

            <label>description</label>
            <input onChange={(e) => this.props.updateDiscOfBook(e)} type="text" />

            <input type="submit" value="Update Book" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default UpdateForm;
