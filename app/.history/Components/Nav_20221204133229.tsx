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
            <Social>
                <AiFillGithub />
                <AiFillLinkedin />
                <AiOutlineMail />
            </Social>
        </Container>
    )
}

const Container = styled.div`
    display: inline-flexbox;
    width: 100%;
`

const Name = styled.div``

const Items = styled.div`
    display: inline-flexbox;
`

const MenuItem = styled.div``

const Social = styled.div``