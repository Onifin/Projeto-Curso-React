import react from 'react';
import { useContext, useCallback, useState } from 'react';
import ToDoContext from '../../../../state/toDo/Context';
import styles from './ToDoList.module.css';
import ToDoItem from './components/ToDoItem/ToDoItem';
import * as toDoActions from '../../../../state/toDo/acitons';
import ToDoModal from './components/ToDoModal/ToDoModal';
import FilterContext from '../../../../state/filter/Context'

function filteredList(list, curFilter){
  switch (curFilter){
    case 'all':
      return list
    case 'active':
      return list.filter((item) => {
        return item.completed === false
      })
    case 'completed':
      return list.filter((item) => {
        return item.completed === true
      })
    default:
      throw new Error()
  }
}

export default function ToDoList(){
  const { ToDo, dispatchToDo } = useContext(ToDoContext);

  const handleTitleUpdate = useCallback((id, title) => {
    dispatchToDo(toDoActions.toggleToDoTitle(id, title))
  }, [dispatchToDo])

  const handleDelete = useCallback((id) => {
    dispatchToDo(toDoActions.removeToDo(id))
  }, [dispatchToDo])

  const handleStatusUpdate = useCallback((id, completed) =>{
    dispatchToDo(toDoActions.toggleToDoStatus(id, completed))
  }, [dispatchToDo])

 
  const handleModalOpen = useCallback((id) =>{
    setCurId(id)
  }, [])
  const handleModalClose = useCallback(() =>{
    setCurId(null)
  }, [])
  const [curId, setCurId] = useState(null)

  const getTitle = useCallback((id) => {
    const curTodo = ToDo.find((todo) => {
      return todo.id === id
    })
    return curTodo.title
  }, [ToDo])
  
  const { filter } = useContext(FilterContext)

  return(
    <div className={styles.toDoListContainer}>
      <ul>
        {filteredList(ToDo, filter).map((todos) => {
          return(
            <ToDoItem 
              key={todos.id}
              id={todos.id}
              title={todos.title}
              completed={todos.completed}
              onModalOpen={handleModalOpen}
              onUpdate={handleStatusUpdate}
              onDelete={() => {handleDelete(todos.id)}}
            />
          )
        })}
      </ul>
      {curId && (
        <ToDoModal 
          id={curId}
          onModalClose={handleModalClose} 
          onTitleUpdate={handleTitleUpdate}
          findTitle={getTitle}
        />
      )}
    </div>
  )
}