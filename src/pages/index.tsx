import {PATHS} from '../constants';

import ThemeSwitcher from '../components/ThemeSwitcher';
import SocialIcons from '../components/SocialIcons';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from '../styles/style.module.scss';

export default function Home() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <Head>
        <title>Олег Кочиев | Сайт Портфолио</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.themeSwitcherContainer}>
          <ThemeSwitcher />
        </div>
        <div className={styles.container}>
          <div>
            <img className={styles.logo} src="/favicon.ico" />
          </div>
          <div className={styles.vertical_line}></div>
          <div className={styles.info}>
            <h1 className={styles.my_name}>Олег Кочиев</h1>
            <div>
              <nav className={styles.navigation}>
                <Link href={PATHS.HOME()}>Главная</Link>
                <Link href={PATHS.ABOUT_ME()}>Обо мне</Link>
                <Link href={PATHS.PORTFOLIO()}>Портфолио</Link>
              </nav>
            </div>
          </div>
        </div>
        <SocialIcons />
      </main>
    </div>
  );
}
