import React from 'react'
import styles from './pagination.module.css'

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Предыдущая</button>
      <button className={styles.btn}>Следующая</button>
    </div>
  )
}
