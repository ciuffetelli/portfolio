import styled from 'styled-components'

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

    &::after {
        content: "";
        width: 20px;
        height: 20px;
        background: #fff;
    }

    @media (min-width: 500px) {
        display: flex;
    }
`

const Image = styled.img`
    width: 50%;
    margin: auto;
`