import React from 'react'
import styledComponents from 'styled-components'
import {Bestsellers} from './data/items'
import {BsCart3, BsSearch, BsHeart} from "react-icons/bs"

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
`


const Container = styledComponents.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
flex-basis: 20vw;
background-color: #f5fbfd;
position: relative;
&:hover ${Info}{
opacity: 1;
}
`

const Circle = styledComponents.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`

const Image = styledComponents.img`
height: 75%;
z-index: 2;
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

const RecommendedProducts = ({item}) => {
  return (
    <Container><p>Bestsellers</p>

      <Circle/>

        <Image src={item.imgUrl}/>  

      <Info>
            <Icon>
              <BsCart3/>
            </Icon>

            <Icon>
              <BsSearch/>
            </Icon>

            <Icon>
              <BsHeart/>
            </Icon>
      </Info>
     
         <Bestsellers 
         image={item.imgUrl} 
         title={item.name} 
         productSize={item.price}/>
                  
    </Container>
  )
}

export default RecommendedProducts