import react from 'react';
import { useContext, useCallback } from 'react';
import ToDoContext from '../../../../state/toDo/Context';
import styles from './ToDoList.module.css';
import ToDoItem from './components/ToDoItem/ToDoItem';
import * as toDoActions from '../../../../state/toDo/acitons';

export default function ToDoList(){
  const { ToDo, dispatchToDo } = useContext(ToDoContext);
  const handleDelete = useCallback((id) => {
    dispatchToDo(toDoActions.removeToDo(id))
  }, [dispatchToDo])
  return(
    <div className={styles.toDoListContainer}>
      <ul>
        {ToDo.map((todos) => {
          return(
            <ToDoItem 
              key={todos.id}
              title={todos.title}
              onDelete={() => {handleDelete(todos.id)}}
            />
          )
        })}
      </ul>
      
    </div>
  )
}