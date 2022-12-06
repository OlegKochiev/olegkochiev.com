import React from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

const SocialIcons = () => {
  return (
    <ul className={styles.social}>
      <li className={styles.social_item}>
        <Link href="#">
          <img alt="social github" src="/github.svg" />
        </Link>
      </li>
      <li className={styles.social_item}>
        <Link href="#">
          <img alt="social linkedIn" src="/linkedin.svg" />
        </Link>
      </li>
      <li className={styles.social_item}>
        <Link href="#">
          <img alt="social hh.ru" src="/hh.ru.svg" />
        </Link>
      </li>
      <li className={styles.social_item}>
        <Link href="#">
          <img alt="social vkontakte" src="/vk.svg" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
