import Script from 'next/script'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { BiCodeBlock, BiCode } from 'react-icons/bi'

import { Nav } from '../Components/Nav'
import { Hero } from '../Components/Hero'
import { Accordion } from '../Components/Accordion'
import { AccordionItem } from '../Components/Accordion/AccordionItem'

export default function Home() {
  return (
    <div className={styles.container}>

        <Head>
          <title>Daniel Ciuffetelli - Developer Engineer</title>
          <meta name="description" content="Daniel Ciuffetelli's personal portfolio, full-stack engineer. Page developed in Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.main}>
          <Nav />

          <Hero />

          <div className={styles.section}>
            <div className={styles.sectionContent}>
              <Accordion data={[
                {
                  title: 'Back-End',
                  icon: BiCodeBlock,
                  description: 'Perfect server-side integration',
                  content: {
                    option: 'Back-End',
                    title: 'Behind the scenes',
                    text: 'From PHP to NodeJs I develop with high standards according to each need.'
                  }
                },
                {
                  title: 'Front-End',
                  icon: BiCode,
                  description: 'Critical eye and perfectionism in every detail',
                  content: {
                    option: 'Front-End',
                    title: 'UX/UI',
                    text: 'The integration of what is most modern in the Javascript stacks, always focusing on user experience and delivering value to each client.'
                  }
                }
              ]}>
                <AccordionItem option='Introduce' title='About me' text='Naturally Curious, enthusiastic, versatile professional. Building a better world through the code.\nIn 2019 during the pandemic, I decided to bring my skills as a web developer to the centre. Development is a passion, and I make no effort to improve my skills every day.' />
              </Accordion>
            </div>
          </div>
        </div>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LE1YHY7DMB"></Script>
        <Script id="GTag">
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LE1YHY7DMB');
            `
          }
        </Script>
    </div>
  )
}