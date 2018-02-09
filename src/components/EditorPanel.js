import React, { Component } from 'react';
import EditOptionPanel from './EditOptionPanel';
import TitleInput from './TitleInput';
import ContentInput from './ContentInput';

class EditorPanel extends Component {
  render() {
    return (
      <div className="EditorPanel">
        <EditOptionPanel />
        <TitleInput />
        <ContentInput />
      </div>
    );
  }
}

export default EditorPanel;
