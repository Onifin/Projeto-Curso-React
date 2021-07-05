import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import ToDoContext from '../../../../state/toDo/Context';
import * as ToDoActions from '../../../../state/toDo/acitons';
import * as yup from 'yup';
import styles from './ToDoCreator.module.css';

export default function ToDoCreator(){
  const { dispatchToDo } = useContext(ToDoContext);
  const { getFieldProps, touched, errors, isValid, handleSubmit} = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: yup.object({
      title: yup.string()
        .required('É preciso preencher com uma tarefa')
    }),
    onSubmit: (values, formikBag) => {
      dispatchToDo(ToDoActions.addToDo(values.title));
      formikBag.setFieldValue('title', '', false)
    }
  });
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus()
  }, [])

   return(
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          className={styles.input}
          type='text'
          autoComplete='off'
          placeholder='nova tarefa'
          ref={inputTitle}
          {...getFieldProps('title')}
        />
          {touched.title && errors.title ? (
            <small className={styles.error}>{errors.title}</small>
          ): null}
        <button 
          className={styles.button}
          type='submit'
          disabled={!isValid}
        >
          Adicionar
        </button>
      </form>
   )
}