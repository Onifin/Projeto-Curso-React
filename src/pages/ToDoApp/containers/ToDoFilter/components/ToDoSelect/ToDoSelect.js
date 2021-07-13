import React from 'react';
import styles from './ToDoSelect.module.css'

export default function ToDoSelect({ value, onOptionChange, options }){
  return(
    <select 
      className={styles.select}
      value={value}
      onChange={onOptionChange}
    >
      {options.map((option) => {
        return (
          <option 
            value={option.value} 
            key={option.value}
          >
            {option.title}
          </option>
        )
      })}
    </select>
  )
}