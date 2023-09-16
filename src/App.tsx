import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';

function App() {
  return (
    
    <div style={{width:'350px', height:'500px'}}>
      <ImageEditorComponent></ImageEditorComponent>
    </div>
    
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
