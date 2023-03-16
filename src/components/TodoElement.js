import React from 'react'
import './TodoElement.css'
import { useDispatch} from 'react-redux'
import {deleteTask,toggelTask} from '../redux/todoslice'
 const TodoElement = ({minitodo}) => {
    console.log('element par elemt',minitodo)
  
  const dispatch= useDispatch()

  const handleDelete=(id)=>{
    dispatch(deleteTask(id))
  }
 
    return (
    <div className='list_container'  >

    <h3>TodoList</h3>
  
   <ul id="incomplete-tasks">
      
   <li className="editMode">
 
   <h4>{minitodo.text} </h4>
 
   <button className="toggle"   onClick={()=> dispatch(toggelTask(minitodo.id))}>{minitodo.isDone ? " Done": "not yet"}</button>
   <button className="delete" onClick={()=>(handleDelete(minitodo.id))} >Delete</button>
    <button className="edit">Edit</button></li>
  
 </ul>
   </div>
 
  )
}
export default TodoElement