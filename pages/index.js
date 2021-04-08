// Main View
import Head from 'next/head';

import styles from '../styles/Home.module.css';

// Home function which is task to view the create page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BasFrontEnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
   Hello World
      </main>
    </div>
  )
}
