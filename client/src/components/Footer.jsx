import styledComponents from "styled-components"
import {BsTwitter, BsFacebook, BsInstagram, BsPinterest} from "react-icons/bs"
import {GrMailOption} from "react-icons/gr"
import {FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"


const Container = styledComponents.div`
display: flex;
color: #F1A403;



`

const Left = styledComponents.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`
const Logo = styledComponents.h1`
font-family: 'Nunito', sans-serif,
'Oswald', sans-serif;
`

const Description = styledComponents.p`
margin: 20px 0px;

`

const SocialMediaContainer = styledComponents.div`
display: flex; 
`

const SocialMediaIcon = styledComponents.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: whitesmoke;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px; 

`

const Center = styledComponents.div`
flex: 1;
padding: 20px;
`

const Title = styledComponents.h3`
margin-bottom: 30px;


`

const List = styledComponents.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`

const ListItems = styledComponents.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styledComponents.div`
flex: 1;
padding: 20px;

`
const ContactDetails = styledComponents.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styledComponents.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JuiceLab </Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque velit veniam quis architecto ducimus nihil totam, non aut. Sit enim ut ex voluptatum explicabo modi tempora quis aspernatur atque.</Description>
          <SocialMediaContainer>
              <SocialMediaIcon color="3b5999">
                  <BsFacebook/>
              </SocialMediaIcon>

              <SocialMediaIcon color="e4405f">
                  <BsTwitter/>
              </SocialMediaIcon>

              <SocialMediaIcon color="e60023">
               <BsInstagram/>
              </SocialMediaIcon>

              <SocialMediaIcon color="e60023">
                  <BsPinterest/>
              </SocialMediaIcon>

          </SocialMediaContainer>              
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Tropical Fruits</ListItems>
                <ListItems>Pits Fruits</ListItems>
                <ListItems>Core Fruits</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Terms</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactDetails>
                <FaMapMarkerAlt style={{marginRight:"10px"}}/>Wandalenweg 30, 20097 Hamburg
            </ContactDetails>
            
            <ContactDetails>
                <FaPhoneAlt style={{marginRight:"10px"}}/>040 882157080
            </ContactDetails>

            <ContactDetails>
                <GrMailOption style={{marginRight:"10px"}}/>contact@juicelab.com
            </ContactDetails>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer