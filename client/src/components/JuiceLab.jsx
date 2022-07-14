import React from 'react'
import styledComponents from 'styled-components'
import {Link} from "react-router-dom"

const DisplayMessage = styledComponents.div`
display: flex;
height: 10vh;
align-items: center;
justify-content: center;
background-color: magenta;
`

const Container = styledComponents.div`
height: 60vh;
display: flex;
`

const Left = styledComponents.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`


const Center = styledComponents.div`
flex: 1;
padding: 20px;
`


const Right = styledComponents.div`
flex: 1;
padding: 20px;

`
const Summary = styledComponents.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 35vh;

`

const SummaryTitle = styledComponents.h1`
font-weight: 200;

`

const SummaryItem = styledComponents.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"}; 
`

const SummaryText = styledComponents.span`

`

const SummaryPrice = styledComponents.span`

`

const SummaryButton = styledComponents.button`
width: 100%;
padding: 10px;
background-color: red;
color: white;
font-weight: 600;
`


const JuiceLab = () => {
  return (
    <div>
      <DisplayMessage>This is the welcome display message</DisplayMessage>
    <Container>
    
    <Left>This is a test</Left>


    <Center>This is a test</Center>
    
    
    <Right>
    <Summary>
                    <SummaryTitle>Your Order</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Mango Splash</SummaryText>
                        <SummaryPrice>€ 2.00</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Coconut Sunrise</SummaryText>
                        <SummaryPrice>€ 2.00</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Summer Discount</SummaryText>
                        <SummaryPrice>€ -0.00</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryText>Total</SummaryText>
                        <SummaryPrice>€ 4.00</SummaryPrice>
                    </SummaryItem>
                    <Link to="/shoppingCart">
                    <SummaryButton>Checkout Now</SummaryButton>
                    </Link>
                 
                </Summary>
    </Right>
</Container>
</div>
)
}

export default JuiceLab 