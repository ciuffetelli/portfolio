import styled from 'styled-components'

export function Hero() {
    return (
        <Container>
            <LeftSide>
                <Title>Full-Stack Developer</Title>
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
    padding: 0.25rem;
    color: #ccc;
    background-color: #102ba3;
`

const RightSide = styled.div``