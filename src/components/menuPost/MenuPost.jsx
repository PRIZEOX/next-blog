import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menupost.module.css'


export const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Путешествия</span>
          <h3 className={styles.postTitle}>
          Сплочённость команды профессионалов ни к чему нас не обязывает
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Никол Пашинян</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Культура
          </span>
          <h3 className={styles.postTitle}>
          Сплочённость команды профессионалов ни к чему нас не обязывает
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Никол Пашинян</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Еда</span>
          <h3 className={styles.postTitle}>
            Сплочённость команды профессионалов ни к чему нас не обязывает
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Никол Пашинян</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Мода
          </span>
          <h3 className={styles.postTitle}>
            Сплочённость команды профессионалов ни к чему нас не обязывает
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Никол Пашинян</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
