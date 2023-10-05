import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt='' width={120} height={80}/>
          <h1 className={styles.logoText}>Hovaniblog</h1>
        </div>
        <p className={styles.desc}>
          Прежде всего, реализация намеченных плановых заданий способствует подготовке и реализации
          существующих финансовых и административных условий.
        </p>
        <div className={styles.social}>
          <Image src="/facebook.png" alt='facebook' width={18} height={18}/>
          <Image src="/instagram.png" alt='instagram' width={18} height={18}/>
          <Image src="/tiktok.png" alt='tiktok' width={18} height={18}/>
          <Image src="/youtube.png" alt='youtube' width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Страницы</span>
          <Link href='/'>Домашняя</Link>
          <Link href='/'>Блог</Link>
          <Link href='/'>Контакты</Link>
          <Link href='/'>О нас</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Тэги</span>
          <Link href='/'>Путешествия</Link>
          <Link href='/'>Культура</Link>
          <Link href='/'>Стиль</Link>
          <Link href='/'>Мода</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Соц. сети</span>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Facebook</Link>
          <Link href='/'>TikTok</Link>
          <Link href='/'>YouTube</Link>
        </div>
      </div>
    </div>
  )
}
