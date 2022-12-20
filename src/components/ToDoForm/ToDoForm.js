import React, { useState } from "react"
import s from "../ToDoForm/toDoForm.module.css"




export default function ToDoForm ({addTodo, setSelect, select}){  // again destructuring
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
        
        <button className={s.buttonPlus}  onClick={handleSubmit} >
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plus-symbol-1577382-1339654.png"  />
            </button>
        
  
        <div className={s.select}>
              <select name="todos" className={s.filterTodo}  onChange={(e)=>{setSelect(e.target.value)}} >
                  <option value="all" >All</option>
                  <option value="completed"  >Completed</option>
                  <option value="uncompleted" >Uncompleted</option>
              </select>
  </div>
  
  
  
      </form>
  
    )
  }