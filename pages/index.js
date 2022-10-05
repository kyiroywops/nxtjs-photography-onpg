import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Nextjs App</title>
        <meta name="description" content="App Photography Nextjs" />
        <link rel="icon" href="/favicon.ico" />
        


      </Head>

      <Hero heading='Captura Fotográfica' message='Capturo momentos en la naturaleza para manternerla viva. ' />

    
    </div>
  )
}
