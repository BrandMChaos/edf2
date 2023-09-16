import React from 'react';
import logo from './logo.svg';

import ReactDOM from 'react';
import Draggable from 'react-draggable';
import './App.css';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';

function App() {
  return (
    <body>
      <div style={{width:'450px', height:'500px'}}>
          <Draggable
          axis='x'
          handle='.handle'
          defaultPosition={{x: 0, y:0}}
          //position={null}
          //grid={{25, 25}}
          scale = {1}
          //onStart={handleStart}
          //onDrag={this.handleDrag}
          //onStop={this.handleStop}
          >
            <ImageEditorComponent></ImageEditorComponent>
          </Draggable>
      </div>
    </body>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    
    */
  );
}

export default App;
