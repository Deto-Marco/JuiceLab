import React from 'react'
import styledComponents from 'styled-components'


const Container = styledComponents.div`
height: 30px;
background-color: maroon;
color : white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

`

const Bulletin = () => {
  return (
    <Container>
        Sales! Free shipping on orders over €20
    </Container>
  )
}

export default Bulletin