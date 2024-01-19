import React, {useState} from "react";

const DisplayToDo= ({ToDoList,setToDoList})=>{

    function deleteToDo(toDeleteID){

        setToDoList(ToDoList.filter(todo=> todo.id!==toDeleteID));
    }

    return(

        <ul>
            {ToDoList.map((todo)=>{
                return(
                <li key={todo.id}>{todo.title}  <button onClick={()=>deleteToDo(todo.id)}>Delete</button></li>)

            })}
        </ul>
    )
}


export default DisplayToDo