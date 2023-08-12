import styles from './home-nav.module.css';

/* eslint-disable-next-line */
export interface HomeNavProps {}

export function HomeNav(props: HomeNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HomeNav!</h1>
    </div>
  );
}

export default HomeNav;
