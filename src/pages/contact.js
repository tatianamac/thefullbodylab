import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | The Full Body Lab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/CopyTrial-Regular.woff" as="font" type="font/woff" crossOrigin />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <p className={styles.navLogo}>The Full Body Lab</p>
          <ul>
            <li>Services</li>
            <li>About Me</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>A supported experimentation lab for your health journey</h1>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
