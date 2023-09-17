import React from 'react';
import { Tldraw, TldrawApp } from "@tldraw/tldraw";
import "./index.css";
import logo from './logo.svg';

import ReactDOM from 'react';
import Draggable from 'react-draggable';
import './App.css';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';

// class App extends React.Component{
function App() {

  // const eventLogger = (e: MouseEvent, data: Object) => {
  //   console.log('Event: ', e);
  //   console.log('Data: ', data);
  // };

  // render() {
  const persistenceId = "tldraw-example";

  const handleMount = (app: TldrawApp) => {
    // You can use the app API here! e.g. app.selectAll()
  };
  
  return (


    <div>
      <div className = "viewport">
        <Draggable defaultPosition={{ x: 300, y: 700 }}>   
          <div style={{width: '300px', height: '300px'}}>
            <ImageEditorComponent />
          </div>
        </Draggable>
      </div>


      <div className = "viewport">
        <Draggable defaultPosition={{ x: 700, y: 500 }}>   
          <div style={{width: '300px', height: '300px'}}>
            <ImageEditorComponent />
          </div>
        </Draggable>
      </div>


      <div className = "whiteboard">
        <Tldraw id={persistenceId} onMount={handleMount} />
      </div>
    </div>
  );

}
// }


export default App;
