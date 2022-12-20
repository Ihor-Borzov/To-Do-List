import React, { useState } from "react"
import s from "../ToDoItem/ToDoItem.module.css"




export default function TodoItem ({todo, index, completeTodo, removeTodo, changeATodo,}){ /* we used destructuring here (it means if we receive in the object some parameters like those names we specified in curvey braces - we create athe variables and assign to them those parameters )*/

let [modifyMode, setModifyMode] = useState(false)
let [inputValue, setInputValue] = useState(todo.text)


let contentStyle={
  textDecoration:"line-through",
   opacity:0.25,
}


  return(    
    <div className = {s.todoItem} onClick={()=>{setModifyMode(true)}}> 
    
 <div className={s.todoItemText}    style={todo.isCompleted? contentStyle:null} >

   {!modifyMode && <span>{todo.text}</span>}
   {modifyMode && <input  autoFocus={true} onBlur={()=>{changeATodo(index, inputValue); setModifyMode(false)}}  value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>}
   
 
 </div> 
  <div className={s.redactorButtons}>
   <div> <button className={s.complete} onClick = {(e)=>{e.stopPropagation();    completeTodo(index)}} > <img  src="https://www.svgrepo.com/show/347693/check-circle.svg" /> </button></div>
   <div><button className={s.remove} onClick = {(e)=>{e.stopPropagation();   removeTodo(index)}} >  <img src = "https://cdn.iconscout.com/icon/free/png-256/delete-737-475058.png"/> </button></div>
   </div>
   
    </div>
    
  )

}


