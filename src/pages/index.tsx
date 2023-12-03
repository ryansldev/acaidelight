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
          <div className="flex flex-col gap-4 bg-white p-10 max-h-[454px] max-w-[470px] rounded-lg">
            <Image src="/assets/logo.png" alt="Logo" height={115} width={450} />
            <h1 className="text-5xl text-depurple-800 font-bold">
              Melhor açaí da cidade<span className="text-degreen-500">.</span>
            </h1>
            <Link className="mt-4" passHref href="#" target="_blank">
              <Button>
                Preciso provar
              </Button>
            </Link>
          </div>

          <div>
            <Image src="/assets/acai-group.png" alt="Açaís" width={717} height={720} />
          </div>

          <div className="absolute -bottom-24 container flex items-center justify-center py-8 gap-24 bg-white shadow-lg rounded-2xl">
            <h2 className="sm:text-2xl text-depurple-800">Precisa falar com um atendente?</h2>
            <Button>
              Falar com atendente
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 mt-24">
        <div className="container">
          <h1 className="sm:text-5xl font-bold text-depurple-800">Sobre nós</h1>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-[18px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies dui id orci lobortis gravida quis a erat. Vivamus elementum quam quis nibh mollis molestie. Nullam velit lorem, tristique sit amet volutpat nec, gravida faucibus nulla. Etiam at orci nibh. Duis ut tincidunt tortor. Phasellus bibendum, leo vel accumsan posuere, dui metus finibus nunc, non consectetur ligula nulla ut dolor. Phasellus condimentum pellentesque lectus. Proin eget ligula lorem. Suspendisse eu ornare erat. Duis facilisis felis eget tristique auctor. Aliquam vel neque gravida, posuere ipsum eget, ultricies ipsum. Vestibulum in imperdiet enim, nec faucibus libero. Suspendisse at laoreet felis. Curabitur in tempor tellus.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-depurple-800">
        <div className="container flex flex-col items-center justify-center">
          <h2 className="sm:text-2xl font-bold text-degreen-500 uppercase">Conheça o nosso catálogo</h2>
          <h1 className="sm:text-5xl font-bold text-white uppercase">Top Morango</h1>
          <div className="flex flex-col items-center justify-center">
            <Image src="/assets/acainocopo2.webp" alt="Açaí no Copo" height={800} width={800} />
            <Button type="secondary">
              Preciso provar
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
