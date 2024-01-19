
import React, { useState } from "react";
import './../styles/App.css';
import CreateToDo from "./CreateToDo";
import DisplayToDo from "./DisplayToDo";

const App = () => {
  
  const [ToDoList,setToDoList] = useState([]);


  return (
    <div>
        {/* Do not remove the main div */}
        <CreateToDo setToDoList={setToDoList} ToDoList={ToDoList}/>
        <DisplayToDo ToDoList={ToDoList} setToDoList={setToDoList} />
    </div>
  )
}

export default App
