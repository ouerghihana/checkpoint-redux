import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

const todoslice = createSlice({
    name: "todo",
    initialState:[
        { id:1, text: "progress in course", isDone: false},
        { id:2, text: "do workshop",  isDone: true },
        { id:3, text: "do checkpoint",  isDone: false},
    ],
    reducers: {
        addTask: (state,action)=> {
            const newTask={
           id : uuidv4() ,
           text: action.payload,
           isDone:false
            };
            state.push(newTask)

        },
     deleteTask:(state,action)=>{
         state= state.filter((el) => el.id !== action.payload);
return  state

   },
 toggelTask:(state,action)=>{
   const task= state.find((el)=> el.id  === action.payload);
 task.isDone =! task.isDone
 }

    }})
    export const {addTask,deleteTask,toggelTask}=todoslice.actions;
    export default  todoslice.reducer;