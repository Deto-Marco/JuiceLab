import React from 'react'
import styledComponents from 'styled-components'


const Container = styledComponents.div`
height: 60px;
`

const Wrapper = styledComponents.div`
padding: 10px 30px;
display: flex;
justify-content: space-between;
align-items: center;

`

const Center = styledComponents.div`
flex:1;
text-align: center
`
const Logo = styledComponents.h1`
font-weight: bold;
font-family: 'Monoton', cursive;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Center><Logo>JUICELAB</Logo></Center>
        </Wrapper>
        </Container>
  )
}

export default Navbar