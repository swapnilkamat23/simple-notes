import React, { Component } from 'react';
import NotesList from './components/NotesList'
import EditorPanel from './components/EditorPanel'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [
        {
          title: "My first note",
          content: "This is the text of my first note..."
        },
        {
          title: "My second note",
          content: "Some random text for the second note..."
        },
        {
          title: "My third note",
          content: "Again some random text for the third note..."
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
          <NotesList notes={this.state.notes}/>
          <EditorPanel />
      </div>
    );
  }
}

export default App;
