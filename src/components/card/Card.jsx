import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'


export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
          <Image className={styles.img} src='/p1.jpeg' alt='hero image' fill/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Мода</span>
        </div>
        <Link href="/"><h1>Смешно, но прототип — не панацея</h1></Link>
        <p className={styles.desc}>Как уже неоднократно упомянуто, базовые сценарии поведения пользователей обнародованы. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление предоставляет широкие возможности для инновационных методов управления процессами.</p>
        <Link href="/" className={styles.btn}>Подробнее</Link>
      </div>
    </div>
  )
}
