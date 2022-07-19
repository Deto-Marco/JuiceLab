import React from 'react'
import styledComponents from "styled-components"
import ProductItem from './ProductItem'
import data from "./data/items"




const Container = styledComponents.div`


`

const Wrapper = styledComponents.div`
padding: 20px;

`

const Title = styledComponents.h1`
font-weight: 300;
text-align: center;
`

const Top = styledComponents.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styledComponents.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props=>props.type === "filled" && "none"};
background-color:${props=>props.type === "filled" ? "red" : "transparent"};
color:${props=>props.type === "filled" && "whitesmoke"};
`

const UpperTexts = styledComponents.div`

`
const TopText = styledComponents.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;

`

const Bottom = styledComponents.div`
display: flex;
justify-content; space-between;
`

const Info = styledComponents.div`
flex: 3;
`

const Hr = styledComponents.hr`
background-color: lightgray;
border: none;
height: 1px;
`

const Summary = styledComponents.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

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


const Checkout = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>

                <TopButton>Continue Shopping</TopButton>

                <UpperTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Wishlist(7)</TopText>
                </UpperTexts>
                <TopButton type='filled'>Back to shopping Cart</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {/* {data.map(item =>{
                        return <ProductItem image={item.imgUrl} title={item.name} ID={item.id} productSize={item.price}/>
                    })} */}
                    <ProductItem image="https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="Mango Splash" ID="84363647949" productSize="150ML"/>
                <Hr/>
                <ProductItem image="https://images.unsplash.com/photo-1597636319015-1fce74db8798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29jb251dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Coconut Sunrise" ID="84363647946" productSize="140ML"/>
                    
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Subtotal</SummaryText>
                        <SummaryPrice>€ 4.00</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Estimated Shipping</SummaryText>
                        <SummaryPrice>Free</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Summer Discount</SummaryText>
                        <SummaryPrice>€ -0.00</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryText>Total</SummaryText>
                        <SummaryPrice>€ 4.00</SummaryPrice>
                    </SummaryItem>
                    <SummaryButton>Pay Now</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Checkout 