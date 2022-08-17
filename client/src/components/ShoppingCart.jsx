import React from 'react'
import styledComponents from "styled-components"
import { IoMdAdd, IoMdRemove } from 'react-icons/io'




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

const Product = styledComponents.div`
display: flex;
justify-content: space-between;
`

const ProductInfo = styledComponents.div`
flex: 2;
display: flex;


`
const Image = styledComponents.img `
width: 200px;
`
const Details = styledComponents.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styledComponents.span`

`
const ProductID = styledComponents.span`

`
const ProductSize = styledComponents.span`

`

const PriceInfo = styledComponents.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const PriceContainer = styledComponents.span`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styledComponents.span`
font-size: 24px;
margin: 5px;
`

const ProductPrice = styledComponents.span`
font-size: 30px;
font-weight: 200;
`



const ShoppingCart = () => {
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
                    <Product>
                        <ProductInfo>
                            <Image src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                            <Details>
                                <ProductName><b>Product:</b> Mango Splash</ProductName>
                                <ProductID><b>ID:</b> 84363647949</ProductID>
                                <ProductSize><b>Quantity:</b> 150ML</ProductSize>
                            </Details>
                        </ProductInfo>
                        <PriceInfo>
                            <PriceContainer>
                                <IoMdAdd/>
                                <ProductAmount>1</ProductAmount>
                                <IoMdRemove/>
                            </PriceContainer>
                            <ProductPrice>€ 2.00</ProductPrice>
                        </PriceInfo>
                    </Product>
                <Hr/>
                    <Product>
                        <ProductInfo>
                            <Image src="https://images.unsplash.com/photo-1597636319015-1fce74db8798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29jb251dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                            <Details>
                                <ProductName><b>Product:</b> Coconut Sunrise</ProductName>
                                <ProductID><b>ID:</b> 84363647949</ProductID>
                                <ProductSize><b>Quantity:</b> 150ML</ProductSize>
                            </Details>
                        </ProductInfo>
                        <PriceInfo>
                            <PriceContainer>
                                <IoMdAdd/>
                                <ProductAmount>1</ProductAmount>
                                <IoMdRemove/>
                            </PriceContainer>
                            <ProductPrice>€ 2.00</ProductPrice>
                        </PriceInfo>
                    </Product>
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

export default ShoppingCart 