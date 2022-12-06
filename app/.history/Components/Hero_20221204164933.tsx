import styled from 'styled-components'

import { IoLogoNodejs } from 'react-icons/io'

export function Hero() {
    return (
        <Container>
            <LeftSide>
                <Title>Developer Engineer</Title>
                <H1>Passionate about the power of code</H1>
                <Text>Opportunities cannot be wasted. If you are interested in my work, please contact me.</Text>
                <Link>Let`s Chat!</Link>
            </LeftSide>
            <RightSide>
                <Image src="/img/profile.png" />
                <Tech><IoLogoNodejs /></Tech>
            </RightSide>
        </Container>
    )
}

const Container = styled.div`
    display: inline-flex;
    margin-bottom: auto;
`

const LeftSide = styled.div`
    padding-top: 2rem;

    @media (min-width: 500px) {
        max-width: 50%;
        padding-top: 4rem;
    }
`

const Title = styled.div`
    width: max-content;
    padding: 0.25rem;
    color: #ccc;
    background-color: #1b3dd3;
`

const H1 = styled.h1``

const Text = styled.p``

const Link = styled.a`
    color: #1b3dd3;
`

const RightSide = styled.div`
    display: none;
    position: relative;
    justify-content: center;

    &::after {
        content: "";
        position: absolute;
        width: 30vw;
        height: 30vw;
        z-index: -1;
        margin: auto;
        border-radius: 50%;
        background-image: radial-gradient(circle, #FFF, transparent 60%, #000);
    }

    @media (min-width: 500px) {
        display: flex;
    }
`

const Image = styled.img`
    width: 50%;
    margin: auto;
`

const Tech = styled.div`
    font-size: 5rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: #23272a;
`