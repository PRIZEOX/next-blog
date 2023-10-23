import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css'

const LoginPage = () => {

  const {data , status} = useSession();


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButtons} onClick={() => signIn("google")}>Войти через Google</div>
        <div className={styles.socialButtons}>Войти через GitHub</div>
        <div className={styles.socialButtons}>Войти через ВК</div>
      </div>
    </div>
  )
}

export default LoginPage;