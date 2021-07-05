import react from 'react';

export default function ToDoItem({ title, onDelete }){
  return(
    <li>
      <span>{title}</span>
      <button onClick={onDelete}>Deletar</button>
    </li>
  )
}