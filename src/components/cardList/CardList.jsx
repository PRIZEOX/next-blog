import React from 'react'
import styles from './cardlist.module.css'
import Image from 'next/image'
import { Card } from '../card/Card'

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Последние посты</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card/>
        </div>
      </div>
    </div>
  )
}
