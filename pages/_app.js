import '@/styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return ( 
    <>
    <Head>
    <title>CodeMestre</title>
    </Head>
  <Component {...pageProps} />
  </>
)}
