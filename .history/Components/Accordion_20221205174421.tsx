import styled from "styled-components";
import { IconType } from "react-icons"

type Item = {
    title: string
    icon: IconType
    description: string
}
type AccordionProps = {
    data: Item[]
}
export function Accordion({ data }: AccordionProps) {
    return (
        <Container>
            <AccordionItem>
                <ItemHeader>
                    <Title>Back-End</Title>
                    <Description>oij wqjqwdoid jqodwjodiwjdqwoidjwqoiwd j</Description>
                </ItemHeader>
            </AccordionItem>
        </Container>
    )
}

const Container = styled.div``

const AccordionItem = styled.div`
`

const ItemHeader = styled.div`
    background-color: #2b2f32;
`

const Title = styled.div`
    color: var(--primary);
`

const Description = styled.div`
    color: #6d7172;
`