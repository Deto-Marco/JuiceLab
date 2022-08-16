import React, { useContext, useEffect, useState, useRef, } from 'react'
import styledComponents from 'styled-components'
import {ImCart} from "react-icons/im"
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from './context/context'


const Container = styledComponents.div`
height: 80px;
border-bottom: 0.5px solid lightgray;
`

const Wrapper = styledComponents.div`
padding: 10px 30px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Left = styledComponents.div`
flex:1;
display: flex;
align-items: center;
`

const Logo = styledComponents.h1`
color: #F1A403 ;
height: 10vh;
font-weight: 700;
font-size: 50px;
font-family:  'Roboto', sans-serif,; 
`


const Right = styledComponents.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuLink = styledComponents.div`
font-size = 14px;
cursor: pointer;
margin-left: 12px; 
`


const Summary = styledComponents.div`
color: red;
width: 200px;
left: 6px;
z-index: 10;
background: #e7dccd;
flex: 1;
position: absolute;
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
color: magenta;
font-weight: 600;
` 



const Navbar = () => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const {cart} = useContext(MyContext)
  const [showCart, setShowCart] = useState(false)
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowCart(false)
    }
  };
  const openCheckout = () => {
    setShowCart(false)
    navigate("/checkout")
  

  }


  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', () => {});
    };
  }, []);

  return (
    <Container>
        <Wrapper>
        <Left>
          <Logo>JUICELAB.</Logo>
        </Left>

        <Right>

            <Link to="/register"><MenuLink>REGISTER</MenuLink></Link>
            <Link to="/login"><MenuLink>LOGIN</MenuLink></Link>

            <span ref={wrapperRef}><MenuLink 
            
            
            onClick={()=> setShowCart(true)}>
              

              <ImCart/><sup style={{color: "red"}}>
              {cart.length}</sup>
              
              </MenuLink>
              {showCart &&
        <Summary>
                <SummaryTitle>Your Order</SummaryTitle>
                {cart.map((item, index)=> (
<SummaryItem key={index}>
                    <SummaryText>{item.title}</SummaryText>
                    <SummaryPrice>$ {item.price}</SummaryPrice>
                </SummaryItem>
                ))}
                
                <SummaryItem type="total">
                    <SummaryText>Total</SummaryText>
                    <SummaryPrice>$ total "45"</SummaryPrice>
                </SummaryItem>

                <SummaryButton onClick={openCheckout}>Checkout Now</SummaryButton>
               
             
            </Summary> 
             }
        
              </span>
        </Right>
        
        </Wrapper>
        </Container>
  )
}

export default Navbar