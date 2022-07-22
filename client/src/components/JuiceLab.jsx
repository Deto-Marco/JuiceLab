import React from 'react'
import styledComponents from 'styled-components'
import Products from './Products'

//import {Link} from "react-router-dom"

const DisplayMessage = styledComponents.div`
display: flex;
color: #F1A403 ;
height: 10vh;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 50px;
font-family:  'Roboto', sans-serif,; 
` 
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
width: 60%;
height: 60%;
object-fit: cover;

`

const Info = styledComponents.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const Button = styledComponents.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`

const JuiceLab = () => {
  return (
    <div>
        <DisplayMessage>Welcome to JuiceLab</DisplayMessage>
    <Container>
        <video  
        autoPlay 
        muted 
        loop 
        style={{
            position:"fixed", 
            right: 0, 
            bottom:0, 
            minWidth: "100%", 
            minHeight:"100%", 
            zIndex:-1
            }}>
            
            <source src="https://static.vecteezy.com/system/resources/previews/002/836/111/mp4/fresh-yellow-orange-juice-on-black-background-liquid-splash-healthy-food-4k-free-video.mp4" type="video/mp4"/>
        </video>
            
        <Image src="https://images.unsplash.com/photo-1505208704833-f341a7a4cefe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWtmYXN0JTIwc21vb3RoaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>

        <Image src="https://images.unsplash.com/photo-1629993470807-33bfa488153b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <Image src="https://images.unsplash.com/photo-1621506289894-c3a62d6be8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGp1aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>

       

         
        <Info>
        
        <Button>SHOP NOW</Button>
        </Info>

       
    </Container>
    
      <Products/>

    </div>
  


      




  )
}

export default JuiceLab




