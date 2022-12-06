import styled from "styled-components"

export type AccordionItemProps = {
    option?: string
    title: string
    highlight?: string
    text: string
}
export function AccordionItem({option, title, highlight, text}: AccordionItemProps) {
    return (
        <Container>
            <Option>{option}</Option>
            <Title>{title}</Title>
            <Highlight>{highlight}</Highlight>
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const Option = styled.small`
    color: var(--text-secondary);
`

const Title = styled.h1`
    font-size: 1.5ren;
`

const Highlight = styled.h2`
    font-size: 1.25rem;
`

const Text = styled.p`
    color: var(--text-secondary);
`