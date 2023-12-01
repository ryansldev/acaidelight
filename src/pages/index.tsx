import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Head>
        <title>Açaí Delight | O melhor açaí da cidade</title>
      </Head>
      
      <section>
        <div className="container flex items-center min-h-[100dvh] justify-center">
          <Image src="/assets/logo.png" alt="Logo" height={400} width={400} />
          <h1 className="sm:text-5xl">O melhor açaí da cidade</h1>
        </div>
      </section>
    </main>
  )
}
