import styled from 'styled-components'

export function Nav() {
    
    return (
        <Container>
            <Name>Daniel Ciuffetelli</Name>
            <Items>
                <MenuItem>Item A</MenuItem>
                <MenuItem>Item B</MenuItem>
                <MenuItem>Item C</MenuItem>
            </Items>
            <Social></Social>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const Name = styled.div``

const Items = styled.div``

const MenuItem = styled.div``

const Social = styled.div``