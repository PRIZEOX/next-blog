import React from 'react'
import styles from './categorylist.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Популярные категории</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt=''
            width={32} height={32}
            className={styles.image}
          />
          Стиль
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image src="/fashion.png" alt=''
            width={32} height={32}
            className={styles.image}
          />
          Мода
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png" alt=''
            width={32} height={32}
            className={styles.image}
          />
          Еда
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png" alt=''
            width={32} height={32}
            className={styles.image}
          />
          Путешествия
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image src="/culture.png" alt=''
            width={32} height={32}
            className={styles.image}
          />
          Культура
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.coding}`}>
          <Image src="/coding.png" alt=''
            width={32} height={32}
            className={styles.image}
          />
          IT
        </Link>
      </div>
    </div>
  )
}
