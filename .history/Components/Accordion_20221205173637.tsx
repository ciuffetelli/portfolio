import styled from "styled-components";

export function Accordion() {
    return (
        <Container>
            <AccordionItem>
                <Title>Daniel</Title>
                <Description>oij wqjqwdoid jqodwjodiwjdqwoidjwqoiwd j</Description>
            </AccordionItem>
        </Container>
    )
}

const Container = styled.div``

const AccordionItem = styled.div``

const Title = styled.div`
    color: var(--primary);
`

const Description = styled.div`
    color: #6d7172;
`