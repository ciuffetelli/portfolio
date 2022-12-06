import styled from "styled-components";

export function Accordion() {
    return (
        <Container>
            <AccordionItem>
                <Title>Daniel</Title>
            </AccordionItem>
        </Container>
    )
}

const Container = styled.div``

const AccordionItem = styled.div``

const Title = styled.div`
    color: --primary;
`