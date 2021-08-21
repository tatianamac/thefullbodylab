import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Frequently Asked Questions | The Full Body Lab</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/CopyTrial-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin
          />
        </Head>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 className={styles.title}>
              A supported experimentation lab for your health journey
            </h1>
          </section>
        </main>
      </Layout>
      {/* <Footer /> */}
    </div>
  );
}
