import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Daniel Ciuffetelli's personal portfolio, front-end engineer. Page developed in Next.js" />
                <link rel="icon" href="/img/logo.svg" />                
            </Head>
                <body className='bg-white text-slate-900 dark:bg-slate-900 dark:text-white ease-in-out duration-300'>
                    <Main />
                    <NextScript />
                </body>
        </Html>
    )
}