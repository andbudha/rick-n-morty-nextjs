import styles from './page.module.scss';

export default function Home() {
  console.log('Hello there!');

  return (
    <main className={styles.home_main_box}>
      <div>Home Page</div>
    </main>
  );
}
