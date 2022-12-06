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

            </RightSide>
        </Container>
    )
}

const Container = styled.div`
    display: inline-flex;
    margin-bottom: auto;
`

const LeftSide = styled.div`
    @media (min-width: 500px) {
        max-width: 50%;
    }
`

const Title = styled.div`
    width: max-content;
    padding: 0.25rem;
    color: #ccc;
    background-color: #102ba3;
`

const H1 = styled.h1``

const Text = styled.p``

const Link = styled.a``

const RightSide = styled.div``