// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from "./components/AppName"
import ToDoInput from "./components/ToDoInput"
import ToDoItem from "./components/ToDoItem"
import ToDoItem2 from "./components/ToDoItem2"
import "./App.css"

function App() {
 

  return (
    <center>
    <div className="toDo-container center">
      <AppName />
      
      <ToDoInput />
      <div className="items-container">
        <ToDoItem />
        <ToDoItem2 />
      </div>
   </div>
    </center>
  );
  
}

export default App;