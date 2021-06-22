import React, { Component } from 'react'

export class FormBooks extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.addBook(e)}>
                    <label>Name of the Book</label>
                    <input onChange={this.props.updateBookName} type='text' />

                    <label>Description of the Book</label>
                    <input onChange={this.props.updateDiscOfBook} type='text' />

                    <label>Status of the Book</label>
                    <input onChange={this.props.updateStatusOfBook} type='text' />

                    <input type="submit" value="Add New Book" />

                </form>
            </div>
        )
    }
}

export default FormBooks;