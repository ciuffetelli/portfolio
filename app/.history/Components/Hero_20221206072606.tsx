import styled from 'styled-components'

import { IoLogoNodejs } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaLaravel } from 'react-icons/fa'

export function Hero() {
    return (
        <Container>
            <LeftSide>
                <Title>Developer Engineer</Title>
                <H1>Passionate about the power of code</H1>
                <Text>If you are interested in my work, do not hesitate to contact me.</Text>
                <Link href="mailto:daniel@ciuffetelli.co.uk">Let`s Chat!</Link>
            </LeftSide>
            <RightSide>
                <Image src="/img/profile.png" />
                <Tech top={2} left={5} width={4} height={4}><NodeJs /></Tech>
                <Tech top={2} right={5} width={4.5} height={4.5}><React /></Tech>
                <Tech top={10} right={5} width={6} height={6}><Next /></Tech>
                <Tech top={12} left={7} width={5} height={5}><Laravel /></Tech>
            </RightSide>
        </Container>
    )
}

const Container = styled.div`
    display: inline-flex;
    margin: 3rem auto auto;
`

const LeftSide = styled.div`
    padding: 2rem 0;

    @media (min-width: 500px) {
        max-width: 50%;
        padding-top: 4rem;
    }
`

const Title = styled.div`
    width: max-content;
    padding: 0.25rem;
    color: #ccc;
    background-color: var(--primary);
`

const H1 = styled.h1`
    font-size: 3rem;
`

const Text = styled.p`
    color: var(--text-secondary);
`

const Link = styled.a`
    color: var(--primary);
`

const RightSide = styled.div`
    display: none;
    position: relative;
    justify-content: center;

    &::after {
        content: "";
        position: absolute;
        width: 30vw;
        height: 30vw;
        z-index: -1;
        margin: auto;
        border-radius: 50%;
        background-image: radial-gradient(circle, #666565, transparent 60%, #2b2f32);
    }

    @media (min-width: 500px) {
        display: flex;
    }
`

const Image = styled.img`
    width: 50%;
    margin: auto;
`

const Tech = styled.div<{ top?: Number, right?: Number, bottom?: Number, left?: Number, width?: Number, height?: Number }>`
    position: absolute;
    ${({top}) => (top) ? `top: ${top}rem;` : ``}
    ${({right}) => (right) ? `right: ${right}rem;` : ``}
    ${({bottom}) => (bottom) ? `bottom: ${bottom}rem;` : ``}
    ${({left}) => (left) ? `left: ${left}rem;` : ``}
    ${({width}) => (width) ? `width: ${width}rem;` : ``}
    ${({height}) => (height) ? `height: ${height}rem;` : ``}
    padding: 0.25rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #23272a;
`

const NodeJs = styled(IoLogoNodejs)`
    width: 100%;
    height: 100%;
    color: #6af5b6;
`
const React = styled(IoLogoReact)`
    width: 100%;
    height: 100%;
    color: #61dafb;
`
const Next = styled(TbBrandNextjs)`
    width: 100%;
    height: 100%;
    color: #808080;
`
const Laravel = styled(FaLaravel)`
    width: 100%;
    height: 100%;
    color: #f9322c;
`