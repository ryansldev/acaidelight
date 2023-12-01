import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
      <meta charSet="UTF-8" />
        <meta name="theme-color" content="#652f91" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Açaí Delight | O melhor açaí da cidade" />
        <meta name="description" content="Nós somos a Açaí Delight e temos o melhor açaí de Campina Grande" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="bg-[#fafafa]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
