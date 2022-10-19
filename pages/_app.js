import Head from 'next/head'
import '../styles/globals.css'
import "@fontsource/raleway";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rofifatuz Zulfa | Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
