import React, { useContext, useCallback, useState, useEffect } from 'react';
import styles from './ToDoFilter.module.css';
import FilterContext from '../../../../state/filter/Context';
import * as filterActions from '../../../../state/filter/actions';
import ToDoSelect from './components/ToDoSelect/ToDoSelect';

export default function ToDoFilter(){
  const { filter, dispatchToFilter } = useContext(FilterContext);
  const [ selectValue, setSelectValue ] = useState(filter);
  const handleOptionChange = useCallback((evt) => {
    setSelectValue(evt.target.value)
  }, [setSelectValue])
  const updateFilter = useCallback((filter) => {
    dispatchToFilter(filterActions.toggleFilter(filter))
  }, [dispatchToFilter])
  useEffect(() => {
    updateFilter(selectValue)
  }, [updateFilter, selectValue])
  
  return(
    <footer className={styles.container}>
      <ToDoSelect 
        value={selectValue}
        onOptionChange={handleOptionChange}
        options={[
            { value: 'all', title: 'Todas as tarefas' },
            { value: 'active', title: 'Tarefas a se fazer' },
            { value: 'completed', title: 'Tarefas realizadas' }
        ]}
        
      />
    </footer>
  )
}