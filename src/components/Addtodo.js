import React from 'react'
import { useState } from 'react'
import {addTask} from "../redux/todoslice"
import { useDispatch} from 'react-redux'
import "./Addtodo.css"
const Addtodo = () => {
  const [text,setText]=useState('');
const dispatch = useDispatch();


const handleAdd=()=>{
    dispatch(addTask(text))
    setText('')
    
  
  }
  

  return(
   
  
  <div className="container_add">
    <div className="container__item">
      <form className="form">
      <div className='title_add'>
      <h1>My Todo List</h1>
      </div>
        <input type="text" className="form__field" placeholder="Put item..."    
        value={text} onChange={(e)=>setText(e.target.value)}/>
        <button type="button" className="btn btn--primary btn--inside uppercase"   
         onClick={()=>handleAdd()} >Add</button>
      </form>
    </div>
   
  </div>
  )
  }  
  export default Addtodo