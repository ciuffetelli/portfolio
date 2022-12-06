import styled from "styled-components"

type AccordionItemProps = {
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

const Container = styled.div``

const Option = styled.small``

const Title = styled.h1``

const Highlight = styled.h2``

const Text = styled.p``