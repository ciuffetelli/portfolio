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
                { data.map((item, key) => (
                    <AccordionItem key={key}>
                        <ItemHeader>
                            <Title>{item.title}<Icon>{<item.icon />}</Icon></Title>
                            <Description>{item.description}</Description>
                        </ItemHeader>
                    </AccordionItem>
                )) }            
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

const Icon = styled.div``

const Description = styled.div`
    color: #6d7172;
`