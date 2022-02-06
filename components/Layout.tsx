import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="" style={{ backgroundColor: '#ffcc00' }}>
        <Head>
          <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <title>My Shitty Health</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
      <Footer />
    </>
  )
}
