import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './ToDoModal.module.css';
import x from '../../../../../../assets/icons/x.svg';

export default function ToDoModal({ onModalClose, onTitleUpdate, id, findTitle}){
  const { getFieldProps, errors, handleSubmit} = useFormik({
    initialValues: {
      title: findTitle(id)
    },
    validationSchema: yup.object({
      title: yup.string()
        .required('É preciso preencher com uma tarefa')
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title)
      formikBag.setFieldValue('title', '', false)
      onModalClose()
    }
  });
  return(
    <>
      <div className={styles.backDrop} onClick={onModalClose}/>
      <div className={styles.modal}>
        <button onClick={onModalClose} className={styles.buttonClose}>
          <img className={styles.x} src={x} alt="" />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type='text'
            autoComplete='off'
            placeholder='Novo nome'
            {...getFieldProps('title')}
          />
            {errors.title ? (
              <small className={styles.error}>{errors.title}</small>
            ): null}
          <button 
            className={styles.button}
            type='submit'
          >
            Atualizar Tarefa
          </button>
        </form>
      </div>
    </>
  )
}