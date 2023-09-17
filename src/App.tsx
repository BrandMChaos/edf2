import React, { useState } from 'react';
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

  const [draggables, setDraggables] = useState([])

  const addDrag = () => {
    var dragList = {... draggables};
  }


document.body.insertAdjacentHTML('afterbegin', "<Draggable> <div style={{width:'450px', height:'500px'}}> <ImageEditorComponent /> </div></Draggable>");
  
  // conditionally  

  return (

    <body>
      <button /*onClick={}*/> Import Document  </button>
      <div>
        <Draggable handle = ".handle">   
          {/* <div className='handle'></div> */}
          <div className="handle" style={{width:'450px', height:'500px'}}>
            Drag Here
          <ImageEditorComponent />
          </div>
        </Draggable>
      </div>
      
    
    </body>
  );
}
// }


export default App;
