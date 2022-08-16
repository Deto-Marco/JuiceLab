import React, { useContext } from 'react'
import styledComponents from 'styled-components'
import {BsCart3} from "react-icons/bs"
import { MyContext } from './context/context'



const Info = styledComponents.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
border-radius:1.5%;

`


const Container = styledComponents.div`
flex: 1;
padding: 20px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: space-between;
flex-basis: 20vw;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
opacity: 1;
}
gap: 20px;

`


const Image = styledComponents.img`
height: 100%;
width: 100%;
object-fit: cover;
border-radius:1.5%;

`


const Icon = styledComponents.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: whitesmoke;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover{
  background-color: #e9f5f5;
  transform: scale(1.5);
}
`

 

const RecommendedProducts = ({imgUrl,id, title, price}) => {
  const {cart, addItemToCart} = useContext(MyContext)
  const myProduct = (product) => {
    addItemToCart(product); 
    console.log(cart);
  }
  
  return (
    <Container>


      <Image src={imgUrl}/>

      <Info>
            <Icon>
             { <div onClick={() => myProduct({id,imgUrl,title,price})}><BsCart3/></div> }

             
            </Icon>
<Icon>
<div>&euro;{price}</div> 
</Icon>
            

            
      </Info>
     
    </Container>
  )
}



export default RecommendedProducts