import React from 'react';
import { Tldraw, TldrawApp } from "@tldraw/tldraw";
import "./index.css";
import logo from './logo.svg';
import './App.css';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';

function App() {
  const persistenceId = "tldraw-example";

  const handleMount = (app: TldrawApp) => {
    // You can use the app API here! e.g. app.selectAll()
  };
  
  return (
    
    <div>
      <div style={{width:'350px', height:'500px'}}>
        <ImageEditorComponent></ImageEditorComponent>
      </div>


      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh"
        }}
      >
        <Tldraw id={persistenceId} onMount={handleMount} />
      </div>
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

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh"
      }}
    >
      <Tldraw id={persistenceId} onMount={handleMount} />
    </div>
  );

}

export default App;
