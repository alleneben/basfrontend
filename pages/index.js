// Main View
import Head from 'next/head';

import Banner from '../components/Banner';

// Home function which is task to view the create page
export default function Home() {
  return (
    <div>
      <Head>
        <title>BasFrontEnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main color='black'>
      <Banner />
      </main>
    </div>
  )
}
