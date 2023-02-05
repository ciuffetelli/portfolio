import Head from 'next/head'
import styled from 'styled-components'

import { BiCodeBlock, BiCode } from 'react-icons/bi'

import { Nav } from '../Components/Nav'
import { Hero } from '../Components/Hero'
import { Accordion } from '../Components/Accordion'
import { AccordionItem } from '../Components/Accordion/AccordionItem'

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
            </SectionContent>
          </Section>
        </Main>

    </Container>
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
