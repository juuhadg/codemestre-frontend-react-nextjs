import Cabecalho from '@/components/Cabecalho/Cabecalho'
import '@/styles/globals.scss'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GoogleOAuthProvider } from "@react-oauth/google"

const  GOOGLE_CLIENT_ID  = '665992785702-vkr3gn3vinvj1rhhloddlf7ivj4nkek9.apps.googleusercontent.com'


export default function App({ Component, pageProps }) {
    
  const router = useRouter()
  return ( 
    <>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <Head>
    <title>CodeMestre</title>
    </Head>
     {(router.asPath != '/login' && router.asPath != '/cadastro') && (<Cabecalho/>)}
  <Component {...pageProps} />
  </GoogleOAuthProvider>
  </>
)}
