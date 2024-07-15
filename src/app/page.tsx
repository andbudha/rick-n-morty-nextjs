import styles from './page.module.scss';

export default function Home() {
  console.log('Hello there!');

  return (
    <main className={styles.home_main_box}>
      <div className={styles.home_info_box}>
        <h2>Home-Page</h2>
        <p>
          I have recenty started learning{' '}
          <span className={styles.home_page_span}>Next.js</span> and I really
          hope this page gets{' '}
          <span className={styles.home_page_span}>statically rendered</span> by
          default.
        </p>
        <p>
          I am not sure if the{' '}
          <span className={styles.home_page_span}>Characters Page</span> gets
          rendered on the{' '}
          <span className={styles.home_page_span}>Server-Side</span> as I use
          state variables in there and I had to specify to use this page{' '}
          <span className={styles.home_page_span}>'as client'</span>. I will
          have to ask our mentor{' '}
          <span className={styles.home_page_span}>Raul</span>, during the
          prsenetation of this{' '}
          <span className={styles.home_page_span}>itsy-bitsy</span> project,
          that if we specify that a page should be used{' '}
          <span className={styles.home_page_span}>'as client</span>, this page
          will no longer get rendered on the{' '}
          <span className={styles.home_page_span}>Server-Side</span> but on the{' '}
          <span className={styles.home_page_span}>Client-Side</span> instead.
        </p>
      </div>
    </main>
  );
}
