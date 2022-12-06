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
    child?: React.ReactElement
}
export function Accordion({ data, child }: AccordionProps) {
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
            <Child>
                {child}
            </Child>        
        </Container>
    )
}

const Container = styled.div`
`

const Child = styled.div``

const AccordionItem = styled.div`
    width: 100%;
    margin: .25rem;

    @media (min-width: 500px) {
        width: 50%;
    }
`

const ItemHeader = styled.div`
    padding: 2rem;
    background-color: #2b2f32;
    border-radius: .25rem;
    cursor: pointer;
`

const Title = styled.div`
    display: inline-flex;
    width: 100%;
    color: var(--primary);
`

const Icon = styled.div`
    margin: -1rem -1rem auto auto;
    font-size: 2rem;
    color: var(--primary);
`

const Description = styled.div`
    color: var(--text-secondary);
`

const Tags = styled.div``