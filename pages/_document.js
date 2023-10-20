import Cabecalho from '@/components/Cabecalho/Cabecalho'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
     <Head>
        
          <link
            rel="icon"
            href="/favicon.ico" 
          />
          
        </Head>
      <body>
        <Cabecalho/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
