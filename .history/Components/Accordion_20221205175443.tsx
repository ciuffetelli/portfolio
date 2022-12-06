import styled from "styled-components";
import { IconType } from "react-icons"

type Item = {
    title: string
    icon: IconType
    description: string
    tags?: string
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
                            <Tags>{item.tags}</Tags>
                        </ItemHeader>
                    </AccordionItem>
                )) }            
        </Container>
    )
}

const Container = styled.div``

const AccordionItem = styled.div`
    width: 100%;

    @media (min-width: 500px) {
        width: 50%;
    }
`

const ItemHeader = styled.div`
    padding: 2rem;
    background-color: #2b2f32;
    border-radius: .25rem;
`

const Title = styled.div`
    display: inline-flex;
    width: 100%;
    color: var(--primary);
`

const Icon = styled.div`
    margin-left: auto;
    color: var(--primary);
`

const Description = styled.div`
    color: #6d7172;
`

const Tags = styled.div``