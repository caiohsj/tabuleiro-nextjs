import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Block from '../components/Block'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabuleiro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Block />
      </main>
    </div>
  )
}
