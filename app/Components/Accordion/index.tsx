import styled from "styled-components";
import { IconType } from "react-icons"
import { useState } from "react";

import { AccordionItem, AccordionItemProps } from "./AccordionItem"

type Item = {
    title: string
    icon: IconType
    description: string
    content: AccordionItemProps
    tags?: string
}
type AccordionProps = {
    data: Item[]
    children?: React.ReactElement
}
export function Accordion({ data, children }: AccordionProps) {

    const [selected, setSelected] = useState(-1)

    const handleItemClick = (key: number) => {
        setSelected(key)
    }

    return (
        <Container>
            <WrapButtons>
                { data.map((item, key) => (
                    <Item key={key} onClick={() => handleItemClick(key)}>
                        <Title>{item.title}<Icon>{<item.icon />}</Icon></Title>
                        <Description>{item.description}</Description>
                        <Tags>{item.tags}</Tags>
                    </Item>
                )) }    
            </WrapButtons>
            <WrapChildren>
                {children && <ItemContent display={(selected === -1)}>{children}</ItemContent>}
                { data.map((item, key) => (
                    <ItemContent display={(selected === key)}>
                        <AccordionItem {...item.content} />
                    </ItemContent> 
                )) }   
            </WrapChildren>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
        flex-direction: row;
    }       
`

const WrapButtons = styled.div`
    display: flex;
    width: 100%;

    @media (min-width: 500px) {
        width: 50%;
        flex-direction: column;
    }       
`
const WrapChildren = styled.div`
    width: 100%;
    padding: 4rem;

    @media (min-width: 500px) {
        width: 50%;

        padding: 2rem 4rem;
    }      
`

const ItemContent = styled.div<{display: boolean}>`
    ${({display}) => (!display) ? 'display: none;' : 'display: flex;'}
    flex: 1;
    justify-content: center;
    align-items: flex-start;
`

const Item = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 0.5rem 0.25rem 0.5rem;
    margin: .25rem;
    background-color: #2b2f32;
    border-radius: .25rem;
    cursor: pointer;   

    @media (min-width: 500px) {
        padding: 2rem;
    }    
`

const Title = styled.div`
    width: 100%;
    color: var(--primary);

    @media (min-width: 500px) {
        display: inline-flex;
    }
`

const Icon = styled.div`
    display: none;
    margin: -1rem -1rem auto auto;
    font-size: 2rem;
    color: var(--primary);

    @media (min-width: 500px) {
        display: flex;
    }    
`

const Description = styled.div`
    color: var(--text-secondary);
    margin-bottom: 2rem;
`

const Tags = styled.div`
    margin-top: auto;
`