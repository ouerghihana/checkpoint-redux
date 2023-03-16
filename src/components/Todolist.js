import React from 'react'
import TodoElement from './TodoElement'
import { useSelector } from 'react-redux'
const Todolist = () => {
  const todoli = useSelector(state=>state.todo)
  console.log('redux state init',todoli)
  return (
    <div>{
        todoli.map((e)=> <TodoElement minitodo={e}  />)
    


    }
    
      </div>
    
  )}
  


export default Todolist