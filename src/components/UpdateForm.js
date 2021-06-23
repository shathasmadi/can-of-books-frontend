import { React, Component } from "react";

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.update(e)}>
          <fieldset>
   

            <label>Name of the Book</label>
            <input onChange={(e) => this.props.updateBookName(e)} type="text" />

             <label>Description of the Book</label>
            <input onChange={(e) => this.props.updateDiscOfBook(e)} type="text" />

            <label>Status of the Book</label>
            <input onChange={(e) => this.props.updateStatusOfBook(e)} type="text" />

           

            <input type="submit" value="Update Book" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default UpdateForm;
