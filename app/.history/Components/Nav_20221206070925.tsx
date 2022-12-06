import styled from 'styled-components'

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

export function Nav() {
    
    return (
        <Container>
            <Name><strong>Daniel</strong> Ciuffetelli</Name>
            <Items></Items>
            <Icons>
                <Social>
                    <a href="https://github.com/ciuffetelli" target="_new"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/ciuffetelli" target="_new"><AiFillLinkedin /></a>
                </Social>
                <a href="mailto:daniel@ciuffetelli.co.uk"><AiOutlineMail /></a>
            </Icons>
        </Container>
    )
}

const Container = styled.div`
    display: inline-flex;
    width: 100%;
    height: 2rem;
    justify-content: space-around;
    align-items: center;
`

const Name = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
    }
`

const Items = styled.div`
    display: inline-flex;
    flex: 1;
    gap: 0.5rem;
    justify-content: center;
`

const MenuItem = styled.div``

const Icons = styled.div`
    display: inline-flex;
    font-size: 1.25rem;
    gap: 0.25rem;
`
const Social = styled.div`
    display: none;
    gap: 0.25rem;

    @media (min-width: 500px) {
        display: inline-flex;
    }
`