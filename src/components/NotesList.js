import React, { Component } from 'react';
import Note from './Note';

class NotesList extends Component {
  render() {
    let notes;
    if(this.props.notes){
      notes = this.props.notes.map(note => {
        return <Note key={note.title} note={note} />;
      });
    }
    return (
      <div className="NotesList">
        {notes}
      </div>
    );
  }
}

export default NotesList;
