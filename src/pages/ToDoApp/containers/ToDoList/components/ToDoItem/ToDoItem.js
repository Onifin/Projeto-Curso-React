import react, { useEffect, useState, useCallback  } from 'react';
import styles from './ToDoItem.module.css';
import pencil from '../../../../../../assets/icons/pencil.svg';
import x from '../../../../../../assets/icons/x.svg';

export default function ToDoItem({ title, onDelete, completed, onUpdate, id, onModalOpen }){
  const [isChecked, seIsChecked] = useState(completed)
  const handleChange = useCallback((evt) => {
    seIsChecked(evt.target.checked)
  }, [])
  useEffect(() => {
    onUpdate(id, isChecked)
  }, [isChecked, id, onUpdate])
  const handleModalOpen = useCallback(() =>{
    onModalOpen(id)
  }, [onModalOpen, id])
  return(
    <li>
      <span className={completed ? styles.completed: null}>{title}</span>
      <div className={styles.leftContainer}>
        <button onClick={handleModalOpen} className={styles.button}>
          <img className={styles.pencil} src={pencil} alt="" />
        </button>
        <input type="checkbox" checked={isChecked} onChange={handleChange}/>
        <button onClick={onDelete} className={styles.button}>
          <img className={styles.pencil} src={x} alt="" />
        </button>
      </div>
    </li>
  )
}