import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import ToDoForm from './components/ToDoForm/ToDoForm';
import TodoItem from './components/ToDoItem/ToDoItem';







export default function App() {

  const [select, setSelect] = useState ("all");

  const [todos, setTodos] = useState(
    [
   {text: 'Learn about react', isCompleted:false, cssTransition:true,},
   {text: 'meat friend for lunch', isCompleted:false,  cssTransition:true,},
   {text: 'build really cool todo app', isCompleted:false,  cssTransition:true,},
   {text: 'fix this app', isCompleted:false,  cssTransition:true,},
 ]
)


const addTodo = (text) =>{
  const newTodos = [...todos,  {text}]       /* we copy what's already in that array and add another object, which has only text parameter in it */
  setTodos(newTodos) 
}

const completeTodo = (index) =>{
 let newTodos = [...todos];
 if(!newTodos[index].isCompleted){ newTodos[index].isCompleted = true;}
  else {newTodos[index].isCompleted = false;}
  setTodos(newTodos)
}

const removeTodo = (index)=>{  
    let newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos)
  }

const changeATodo = (index, newValue)=>{
if(!newValue){return}
else{
  let newTodos = [...todos];
newTodos[index].text = newValue;
setTodos(newTodos)
}
}

const selectToDos = () =>{
  let selectedToDos = []
  switch(select){
    case "all":
     return todos

    case "completed":
    return  selectedToDos = todos.filter((e)=>{return (e.isCompleted===true)})

    case "uncompleted":
      return  selectedToDos = todos.filter((e)=>{return (e.isCompleted===false)})
  }
}


  return (
    <div className="app">
<div className = "todo-list">
<ToDoForm addTodo = {addTodo} select={select} setSelect={setSelect}/> {/*   we pass the function to update todo state */}


<TransitionGroup component = "div">

{selectToDos().map( (todo, index)=>(
  
<CSSTransition key = {todo.text} timeout={700} classNames = "item">

 <TodoItem key={index} index={index} 
todo={todo} completeTodo = {completeTodo}
 removeTodo={removeTodo}   changeATodo={changeATodo}  />    
  
  </CSSTransition>
       ))}

</TransitionGroup>




</div>




    </div>
  );
}




