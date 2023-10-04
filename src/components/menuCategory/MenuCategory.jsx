import Link from 'next/link'
import React from 'react'
import styles from './menucategory.module.css'

export const MenuCategory = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Стиль
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Мода
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Еда
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Путешествия
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Культура
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        IT
      </Link>
    </div>
  )
}
