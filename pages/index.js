// Main View
import Head from 'next/head';

import Basfooter from '../components/footer';
import MenuWrapper from '../components/menu/menu_wrapper';

// Home function which is task to view the create page
export default function Home() {
  return (
    <div>
      <Head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryFile }}></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.bannerFile }}></script>
        <title>BasFrontEnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="menu">

      </header>


      <main className="main__body" color='black' >
        <MenuWrapper/>
      </main>

      <footer className="main__footer">
        <Basfooter />
      </footer>
    </div>
  )
}
