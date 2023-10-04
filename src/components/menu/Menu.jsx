import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { MenuPost } from '../menuPost/MenuPost'
import { MenuCategory } from '../menuCategory/MenuCategory'
import { Pagination } from '../pagination/Pagination'

export const Menu = () => {
  return (
    <div className={styles.container}>
      {/* новые */}
      <h2 className={styles.subtitle}>{"Что нового"}</h2>
      <h1 className={styles.title}>Самое популярное</h1>
      <MenuPost withImage={false}/>

      {/* Категории */}
      <h2 className={styles.subtitle}>Найти категорию</h2>
      <h1 className={styles.title}>Категории</h1>
      <MenuCategory/>

      {/* Выбор редакции */}
      <h2 className={styles.subtitle}>Выбрано редакторами</h2>
      <h1 className={styles.title}>Выбор редакции</h1>
      <MenuPost withImage={true}/>

    </div>

      
  )
}
