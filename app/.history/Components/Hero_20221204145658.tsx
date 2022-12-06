import styled from 'styled-components'

export function Hero() {
    return (
        <Container>
            <LeftSide>
                <Title>Full-Stack Developer</Title>
                <H1>Passionate about the power of code</H1>
                <Text>I am always open to challenges, each new project takes me one step further in this game of winning.</Text>
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

const LeftSide = styled.div``

const Title = styled.div`
    width: min-content;
    padding: 0.25rem;
    color: #ccc;
    background-color: #102ba3;
`

const H1 = styled.h1``

const Text = styled.p``

const RightSide = styled.div``