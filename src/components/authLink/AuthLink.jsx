"use client"

import React, { useState } from 'react'
import styles from './authlink.module.css'
import Link from 'next/link';

export const AuthLink = () => {
  const status = "authenticated";
  const [open ,setOpen] = useState(false)
  return (
    <div className={styles.cont}>
      {status === "notauthenticated" ? (
        <Link href='/login' className={styles.del}>Войти</Link>
      ): (
        <>
          <Link href='/write' className={styles.del}>Выложить</Link>
          <span className={styles.link}>Выйти</span>
        </>
      )}
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      {open && (
        <div className={styles.menu}>
          <Link href='/' >Домашняя</Link>
          <Link href='/' >Контакты</Link>
          <Link href='/' >О нас</Link>
          {status === "notauthenticated" ? (
            <Link href='/login'>Войти</Link>
          ): (
          <>
            <Link href='/write'>Выложить</Link>
            <span>Выйти</span>
          </>
          )}
        </div> 
      )}
    </div>
  )
}
