import React, { useContext, useReducer, useState } from "react"

 export let AlertContext = React.createContext();
 export const useAlert = ()=>{
   return useContext(AlertContext)
}




const SHOW_ALERT = "show";
const HIDE_ALERT = "hide"


//basic reducer for any app
const reducer = (state, action)=>{
switch (action.type){

case 'show': return{
  ...state, visible:true, text: action.text
}

case 'hide': return{
  ...state, visible:false
}

  default: return state 
}

}


export const AlertProvider = ({children})=>{

    // const [alert, setAlert] = useState(false);
    // let toggle = ()=>{
    //   setAlert((prev)=>{return(!prev)})
    // }

    //useReducer returns lmost the same what useState -  where first array element is state and second element is the function dispatch
    //with help of which we will be able to change the state

    const [state, dispatch] = useReducer(reducer, {
      visible:false,
      text:''
    })


const show = (text)=>{
 
    dispatch({type:SHOW_ALERT, text})
  
}

const hide = ()=>{
  
    dispatch({type:HIDE_ALERT})
  
}



    return(
        <AlertContext.Provider value = {{
          visible:state.visible,
          text: state.text,
show, hide,
        }}>
{children}
        </AlertContext.Provider>
    )
}