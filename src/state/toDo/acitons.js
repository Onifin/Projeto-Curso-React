import * as todoTypes from './types';

export function addToDo(title){
  return{
    type: todoTypes.ADD_TODO,
    payload:{
      title: title,
    },
  }

}

export function toggleToDoStatus(id, completed){
  return{
    type: todoTypes.TOGGLE_TODO_STATUS,
    payload: {
      id: id,
      completed: completed,
    },
  }
}

export function toggleToDoTitle(id, title){
  return{
    type: todoTypes.TOGGLE_TODO_TITLE,
    payload: {
      id: id,
      title: title,
    },
  }
}

export function removeToDo(id){
  return{
    type: todoTypes.TODO_REMOVE,
    payload: {
      id: id,
    },
  }
}