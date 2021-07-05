import React, { useReducer } from 'react';
import ToDoContext from '../Context';
import ToDoReducer from '../reducer';

export default function Provider({ children }){
  const [ToDos, dispatchToDos] = useReducer(ToDoReducer, [])
  return(
    <ToDoContext.Provider value={{ ToDo: ToDos, dispatchToDo: dispatchToDos}}>{ children }</ToDoContext.Provider>
  )
}