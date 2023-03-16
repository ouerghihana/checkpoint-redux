
import React from 'react';
import { useSelector } from 'react-redux';
import Addtodo  from './components/Addtodo';
import Todolist from './components/Todolist';
const  App=()=> {
  const todoel= useSelector(state=>state.todo)
  console.log("todo jeyaa me redux",todoel)
  return (
    <div className="App">
      <Addtodo/>
      <Todolist/>
    </div>
  );
}

export default App;
