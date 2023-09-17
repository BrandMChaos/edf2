import React from 'react';
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
  return (



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
  );
}
// }


export default App;
