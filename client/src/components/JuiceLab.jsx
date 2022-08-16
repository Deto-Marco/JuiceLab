import React from 'react'
import styledComponents from 'styled-components'
import Products from './Products'
import Carousel from "./Carousel"
//import {Link} from "react-router-dom"


const Container = styledComponents.div`
display: flex;
align-content: center;
flex-direction: row;
gap: 10px;
margin: 3px;
height: 70vh;
position: relative;
padding-bottom: 50px;
`




const Image = styledComponents.img`
width: 50%;
height: 100%;
object-fit: cover;
justify-content: space-around


`

const Info = styledComponents.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;

`


const Button = styledComponents.button`
border: none;
top:20;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`

const Suggestions = styledComponents.h1`
margin: 50px;
color: #F1A403;
text-align: center;
`

const JuiceLab = () => {
  return (
    <div>
     
        <Carousel/> 

    <Suggestions>Our Bestsellers</Suggestions>
    <Container>

        
        <Image src="https://images.unsplash.com/photo-1653542773369-51cce8d08250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHNtb290aGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <Image src="https://images.unsplash.com/photo-1629993470807-33bfa488153b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      

        <Image src="https://images.unsplash.com/photo-1621506289894-c3a62d6be8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGp1aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
       

        <Info>
        
        <Button>Smoothies</Button>
        <Button>Milkshakes</Button>
        <Button>Juices</Button>
        

        </Info>

       
    </Container>
   
    <Suggestions>Recommended Products</Suggestions>
 
      <Products/>

    </div>
  


      




  )
}

export default JuiceLab




