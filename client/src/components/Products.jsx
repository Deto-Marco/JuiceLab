import React from 'react'
import styledComponents from 'styled-components'
import {Bestsellers} from './data/items'
import RecommendedProducts from './RecommendedProducts'



const Container = styledComponents.div`
padding:20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between

`;

const Products = () => {
  return (
    <Container>
      {Bestsellers.map(item=>(
          <RecommendedProducts imgUrl={item.imgUrl} key={item.id} title={item.name} id={item.id} price={item.price}/>
      ))}
    </Container>
  ) 
}

 
export default Products