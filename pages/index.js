// Main View
import Head from 'next/head';

import AreaStylistSection from '../components/AreaStylistSection';
import Banner from '../components/Banner';
import Basfooter from '../components/footer';
import Navbar from '../components/Header';
import HowItWorks from '../components/Howitworks';
import Sponsor from '../components/sponsor';
import Testimonial from '../components/testimonal';

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

      <main color='black'>
        <div class="background">
          <Navbar />
          <Banner />
        </div>
        <Sponsor />
       <AreaStylistSection/>
       <HowItWorks/>
       <AreaStylistSection/>
       <Testimonial />
      </main>

      <footer>
        <Basfooter />
      </footer>
    </div>
  )
}
