import React, {useState} from "react";

const CreateToDo = ({setToDoList, ToDoList})=>{

    const [todo,setToDo]= useState("");

    function newTodo(e){

        setToDo(e.target.value);
        
    }
    // console.log(todo);

    function handleSubmit(e){
        e.preventDefault()
        // console.log("hello");

        let lastElement= ToDoList[ToDoList.length-1];
        let lastId= lastElement?lastElement.id:0;

        let obj={
            id:lastId+1,
            title: todo
        }
        setToDo("");
        // console.log(obj);

        setToDoList([...ToDoList,obj])
        
    }
    return(

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter ToDo" onChange={newTodo} value={todo}></input>
            <button>Add ToDo</button>
        </form>
    )
}


export default CreateToDo