import React, { useContext, useEffect, useState } from 'react'
import styledComponents from 'styled-components'
import {ImCart} from "react-icons/im"
import { NavLink } from 'react-router-dom'
import { MyContext } from './context/context'






const Container = styledComponents.div`
height: 60px;
`

const Wrapper = styledComponents.div`
padding: 10px 30px;
display: flex;
justify-content: space-around;
position: absolute;
right: 150px;
`

const Right = styledComponents.div`
flex:1;
display: flex;


`

const MenuLink = styledComponents.div`
font-size = 14px;
cursor: pointer;
margin-left: 12px; 
`
const Summary = styledComponents.div`
color: white;
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
width: 100%;  <Image src={item.img}/>
padding: 10px;
background-color: red;
color: white;
font-weight: 600;
` 

const Navbar = () => {
  console.log(useContext(MyContext));
  const {cart} = useContext(MyContext)
  const [showCart, setShowCart] = useState(false)
  useEffect(() => 
  {},[])

  return (
    <Container>
        <Wrapper>

        <Right>

            <NavLink to="/register"><MenuLink>REGISTER/LOGIN</MenuLink></NavLink>

            <NavLink to="/cart"><MenuLink onMouseEnter={()=> setShowCart(true)} onMouseOut={()=> setShowCart(false)}><ImCart/><sup style={{color: "white"}}>
              {cart.length}</sup></MenuLink></NavLink>
        </Right>
        {showCart &&
        <Summary>
                <SummaryTitle>Your Order</SummaryTitle>
                {cart.map(item => (
<SummaryItem>
                    <SummaryText>{item.title}</SummaryText>
                    <SummaryPrice>$ {item.price}</SummaryPrice>
                </SummaryItem>
                ))}
                
                <SummaryItem type="total">
                    <SummaryText>Total</SummaryText>
                    <SummaryPrice>$ total "45"</SummaryPrice>
                </SummaryItem>
                <NavLink to="/checkOut">
                <SummaryButton>Checkout Now</SummaryButton>
                </NavLink>
             
            </Summary> 
             }
        
        </Wrapper>
        </Container>
  )
}

export default Navbar