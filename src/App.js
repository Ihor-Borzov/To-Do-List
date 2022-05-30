import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';













export default function App() {

  const [todos, setTodos] = useState([
   {text: 'Learn about react', isCompleted:false,},
   {text: 'meat friend for lunch', isCompleted:false,},
   {text: 'build really cool todo app', isCompleted:false,},
   {text: 'fix this app', isCompleted:false,},
 ])


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



  return (
    <div className="app">
<div className = "todo-list">
<ToDoForm addTodo = {addTodo} /> {/*   we pass the function to update todo state */}


<TransitionGroup component = "div">

{todos.map( (todo, index)=>(
  
<CSSTransition key = {todo.text} timeout={700} classNames = "item">

 <Todo key={index} index={index} 
todo={todo} completeTodo = {completeTodo}
 removeTodo={removeTodo}   changeATodo={changeATodo}  />    
  
  </CSSTransition>
       ))}

</TransitionGroup>

</div>
    </div>
  );
}



function Todo ({todo, index, completeTodo, removeTodo, changeATodo,}){ /* we used destructuring here (it means if we receive in the object some parameters like those names we specified in curvey braces - we create athe variables and assign to them those parameters )*/

let [modifyMode, setModifyMode] = useState(false)
let [inputValue, setInputValue] = useState(todo.text)
/* let [removed, setRemoved] = useState(false) */

let contentStyle={
  textDecoration:"line-through",
  opacity:0,
}


  return(
/*     {textDecoration: todo.isCompleted ? "line-through":"",} */
    
    <div className = "todoItem"  style={{style : todo.isCompleted ? contentStyle : ""}}> 
    
 <div className="todoItemText"  onDoubleClick={()=>{setModifyMode(true)}} >

   {!modifyMode && <span>{todo.text}</span>}
   {modifyMode && <input  autoFocus={true} onBlur={()=>{changeATodo(index, inputValue); setModifyMode(false)}}  value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>}
   
 
 </div> 
  <div className="redactorButtons">
   <div> <button className="complete" onClick = {()=>{completeTodo(index)}} > <img  src="https://www.svgrepo.com/show/347693/check-circle.svg" /> </button></div>
   <div><button className="remove" onClick = {()=>{removeTodo(index)}} >  <img src = "https://cdn.iconscout.com/icon/free/png-256/delete-737-475058.png"/> </button></div>
   </div>
   
    </div>
    
  )

}



function ToDoForm ({addTodo}){  // again destructuring
  const [value, setValue] = useState ("");


const handleSubmit = (e)=>{
  e.preventDefault();  // you have to use preventDefault - because sub,it will be trying to send a server request
  if(!value){return}  // do not submit the form if value is empty
  addTodo(value); // this function we have to pass from component App - that is setToDos useState function
  setValue('')  // clear the value when you finished
}

  return(

    <form onSubmit = {handleSubmit}>  {/*  this function will execute when you hit enter we always have to specify it when use form element */}

      <input  type = "text" placeholder = "Add todo..." value = {value} onChange={(e)=>{setValue(e.target.value)}}></input>   
      
      <button className="buttonPlus"  onClick={handleSubmit} ><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plus-symbol-1577382-1339654.png"  /></button>
      

      <div class="select">
            <select name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
</div>



    </form>

  )
}

