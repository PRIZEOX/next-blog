"use client"
import Image from 'next/image'
import styles from './themetoggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export const ThemeToggle = () => {
  const {theme, toggle} = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle} style={
      theme === "dark"
        ? {background: "white"}
        : {background: "#0f172a"}  
    }>
      <Image src='/moon.png' alt='dark' width={14} height={14}/>
      <div className={styles.circle} style={
        theme === "dark" 
          ? {left:2, background: "#0f172a"}
          : { right:2, background:"white"}
      }></div>
      <Image src='/sun.png' alt='light' width={14} height={14}/>
    </div>
  )
}
