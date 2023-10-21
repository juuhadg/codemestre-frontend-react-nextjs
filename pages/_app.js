import Cabecalho from '@/components/Cabecalho/Cabecalho'
import '@/styles/globals.scss'
import Head from 'next/head'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {
    
  const router = useRouter()
  return ( 
    <>
    <Head>
    <title>CodeMestre</title>
    </Head>
    <Cabecalho/>
  <Component {...pageProps} />
  </>
)}
