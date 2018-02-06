import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
        <li>{this.props.note.title} - {this.props.note.content}</li>
    );
  }
}

export default Note;
