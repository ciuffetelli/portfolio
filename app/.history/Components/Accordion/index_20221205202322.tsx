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
            <WrapButtons>
                { data.map((item, key) => (
                    <AccordionItem key={key}>
                        <Title>{item.title}<Icon>{<item.icon />}</Icon></Title>
                        <Description>{item.description}</Description>
                        <Tags>{item.tags}</Tags>
                    </AccordionItem>
                )) }    
            </WrapButtons>
            <WrapChildren>
                {children && <Child display={(selected === -1)}>{children}</Child>}
                { data.map((item, key) => (
                    <Child display={(selected === key)}>{item.child}</Child> 
                )) }   
            </WrapChildren>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const WrapButtons = styled.div`
    display: flex;
    width: 100%;
`
const WrapChildren = styled.div`
    width: 100%;
`

const Child = styled.div<{display: boolean}>`
    ${({display}) => (!display) ? 'display: none;' : 'display: flex;'}
    flex: 1;
    justify-content: center;
    align-items: flex-start;
`

const AccordionItem = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    margin: .25rem;
    background-color: #2b2f32;
    border-radius: .25rem;
    cursor: pointer;

    @media (min-width: 500px) {
        width: 50%;
    }    
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
    margin-bottom: 2rem;
`

const Tags = styled.div`
    margin-top: auto;
`