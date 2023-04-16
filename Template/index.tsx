import { useEffect } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga';
import Link from 'next/link';

import { Nav } from 'Components/Nav'

import { IoIosArrowBack } from 'react-icons/io'

type TemplateProps = {
    title: string
    back?: {
        title: string
        href: string
    }
    children: React.ReactNode
}
export default function Template(props: TemplateProps) {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])    

    return (
        <>
            <Head>
                <title>{props.title} | Daniel Ciuffetelli</title>
            </Head>

            <header className='flex container p-4 m-auto'>
                <Nav />
            </header>

            <main className='min-h-screen'>
                <div className='container flex flex-wrap gap-4 p-4 m-auto mb-4'>
                    {props.back && (
                        <Link href={props.back.href} className='flex items-center'><IoIosArrowBack /> {props.back.title}</Link>
                    )}
                    <div className="w-full md:w-max bg-sky-600 text-white break-words font-semibold p-1 text-center">
                        {props.title}
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    {props.children}
                </div>
            </main>
        </>
    )
}