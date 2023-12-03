import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Button from '@/components/Button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Head>
        <title>Açaí Delight | O melhor açaí da cidade</title>
      </Head>

      <section className="py-20 bg-depurple-800 flex min-h-[100dvh]">
        <div className="mx-auto flex items-center justify-center gap-6 rounded-lg flex-wrap max-w-[90dvw]">
          <div className="flex flex-col gap-4 bg-white p-10 max-h-[350px] rounded-lg">
            <Image src="/assets/logo.png" alt="Logo" height={115} width={450} />
            <h1 className="sm:text-5xl text-3xl text-depurple-800 font-bold">O melhor açaí da cidade<span className="text-degreen-500">.</span></h1>
            <Link passHref href="#" target="_blank">
              <Button>
                Preciso provar
              </Button>
            </Link>
          </div>

          <div>
            <Image src="/assets/acai-group.png" alt="Açaís" width={717} height={720} />
          </div>
        </div>
      </section>
    </main>
  )
}
