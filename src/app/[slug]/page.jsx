import React from 'react'
import styles from './singlePage.module.css'
import { Menu } from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Какой нибудь заголовок будет здесь</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image alt='' src='/p1.jpeg' fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Nikol Pashaev</span>
                        <span className={styles.date}>01.02.2023</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image alt='' src='/p1.jpeg' fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.desc}>
                    <p> Для современного мира социально-экономическое развитие,
                        а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для кластеризации усилий.
                        А ещё предприниматели в сети интернет рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
                    </p>
                </div>
                <div className={styles.comments}>
                    <Comments/>
                </div>
            </div>
            <Menu/>
        </div>

    </div>
  )
}

export default SinglePage