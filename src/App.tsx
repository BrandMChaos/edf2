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
      <div>
        <Draggable>   
          {/* <div className='handle'></div> */}
          <div style={{width:'450px', height:'500px'}}>
            hi
          <ImageEditorComponent />
          </div>
        </Draggable>
        {/* <Draggable>
          <div> Movable</div>
        </Draggable> */}
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
  );

}
// }


export default App;
