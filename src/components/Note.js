import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
        <div className="Item">
          <p className="ItemTitle">{this.props.note.title}</p>
          <p className="ItemContent">{this.props.note.content}</p>
        </div>
    );
  }
}

export default Note;
