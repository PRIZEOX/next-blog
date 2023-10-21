import Link from 'next/link';
import styles from './comments.module.css'
import Image from 'next/image';

const Comments = () => {
    const status = 'authenticated';
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Комментарии</h1>
        {status === 'authenticated' ? (
            <div className={styles.write}>
                <textarea placeholder='напишите комментарий ....' className={styles.input}></textarea>
                <button className={styles.btn}>Отправить</button>
            </div>
        ) : (
            <Link href='/login'>Войдите чтобы оставить комментарий</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src='/p1.jpeg'
                    alt=''
                    width={50}
                    height={50}
                    className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Anna Pashaeva</span>
                        <span className={styles.date}>20.02.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Для современного мира социально-экономическое развитие,
                    а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для кластеризации усилий.
                    А ещё предприниматели в сети интернет рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments