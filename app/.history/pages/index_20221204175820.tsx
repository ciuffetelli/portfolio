import Head from 'next/head'
import styled from 'styled-components'

import { Nav } from '../Components/Nav'
import { Hero } from '../Components/Hero'
import { Accordion } from '../Components/Accordion'

export default function Home() {
  return (
    <Container>

        <Head>
          <title>Daniel Ciuffetelli - Developer Engineer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <Nav />

          <Hero />

          <Section>
            <SectionContent>
              <Accordion></Accordion>
            </SectionContent>
          </Section>
        </Main>

    </Container>
    // <div className={styles.container}>


    //   <main className={styles.main}>
    //     <Nav />

    //     <Hero />
    //     {/* <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.tsx</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div> */}
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    //   <a href='https://elements.envato.com/ds-developer-portfolio-psd-template-9FZDH4D'>Reference</a>
    // </div>
  )
}

const Container = styled.div`
  padding: 0 2rem;
`

const Main = styled.main`
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 0 0 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  width: 100vw;
  padding: 5rem 0;
  background: #23272a;
`

const SectionContent = styled.div`
  margin: auto;
  max-width: 1024px;
`

const SectionItem = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`
