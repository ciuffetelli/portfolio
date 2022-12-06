import styled from "styled-components";
import { IconType } from "react-icons"
import { useState } from "react";

type Item = {
    title: string
    icon: IconType
    description: string
    child: React.ReactElement
    tags?: string
}
type AccordionProps = {
    data: Item[]
    children?: React.ReactElement
}
export function Accordion({ data, children }: AccordionProps) {

    const [selected, setSelected] = useState(-1)

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

                {children && <Child display={(selected === -1)}>{children}</Child>}

                { data.map((item, key) => (
                    <Child key={key} display={(selected === key)}>{item.child}</Child> 
                )) }                   
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const Child = styled.div<{display: boolean}>``

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