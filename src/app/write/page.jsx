"use client"

import Image from 'next/image'
import styles from './writePage.module.css'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Заголовок' className={styles.title}/>
      <div className={styles.editor}>
        <button className={styles.btn} onClick={() => setOpen(!open)}>
          <Image src='/plus.png' alt='' width={16} height={16}/>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addBtn}>
              <Image src='/image.png' alt='' width={16} height={16}/>
            </button>
            <button className={styles.addBtn}>
              <Image src='/external.png' alt='' width={16} height={16}/>
            </button>
            <button className={styles.addBtn}>
              <Image src='/video.png' alt='' width={16} height={16}/>
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Расскажи свою историю'/>
      </div>
      <button className={styles.publish}>Опубликовать</button>
    </div>
  )
}

export default WritePage