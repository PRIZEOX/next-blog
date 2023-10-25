"use client"

import { signIn, useSession } from 'next-auth/react';
import styles from './loginPage.module.css'
import { useRouter } from 'next/navigation';

const LoginPage = () => {

  const {data , status} = useSession();
  
  const router = useRouter();

  if(status === 'loading'){
    return <div> Загрузка...</div>
  }
  if(status === 'authenticated'){
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButtons} onClick={() => signIn("google")}>Войти через Google</div>
        <div className={styles.socialButtons} onClick={() => signIn("github")}>Войти через GitHub</div>
        <div className={styles.socialButtons} onClick={() => signIn("discord")}>Войти через Discord</div>
      </div>
    </div>
  )
}

export default LoginPage;