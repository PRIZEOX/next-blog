import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Хей, user</b> познакомься с моими творческими идеями.</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image className={styles.img} src='/p1.jpeg' alt='hero image' fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Базовый вектор развития так же органично вписывается в наши планы.</h1>
          <p className={styles.postDesc}>
            Каждый из нас понимает очевидную вещь: консультация с широким активом позволяет выполнить важные задания по разработке распределения внутренних резервов и ресурсов.
            В рамках спецификации современных стандартов, ключевые особенности структуры проекта, инициированные исключительно синтетически, разоблачены.
          </p>
          <button className={styles.btn}>Подробнее</button>
        </div>
      </div>
    </div>
  )
}
