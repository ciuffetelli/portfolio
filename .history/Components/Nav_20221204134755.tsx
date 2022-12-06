import styled from 'styled-components'

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

export function Nav() {
    
    return (
        <Container>
            <Name>Daniel Ciuffetelli</Name>
            <Items>
                <MenuItem>Item A</MenuItem>
                <MenuItem>Item B</MenuItem>
                <MenuItem>Item C</MenuItem>
            </Items>
            <Icons>
                <Social>
                    <AiFillGithub />
                    <AiFillLinkedin />
                </Social>
                <AiOutlineMail />
            </Icons>
        </Container>
    )
}

const Container = styled.div`
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
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
    gap: 0.25rem;
`
const Social = styled.div`
    display: none;
    gap: 0.25rem;

    @media (min-width: 500px) {
        display: inline-flex;
    }
`