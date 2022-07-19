import React, { useState } from 'react'
import styledComponents from "styled-components"


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




const ProductItem = (props) => {
    const [quantity, setQuantity] = useState(1)
  return (
    <Product>
    <ProductInfo>
        <Image src={props.image}/>
        <Details>
            <ProductName><b>Product:</b> {props.title}</ProductName>
            <ProductID><b>ID:</b> {props.ID}</ProductID>
            <ProductSize><b>Quantity:</b> {props.productSize}</ProductSize>
        </Details>
    </ProductInfo>
    <PriceInfo>
        <PriceContainer>
        <button onClick={()=> setQuantity(quantity+1)}>+</button>
            <ProductAmount>{quantity}</ProductAmount>
            <button onClick={()=> setQuantity(quantity-1)}>-</button>
        </PriceContainer>
        <ProductPrice>€ 2.00</ProductPrice>
    </PriceInfo>
</Product>



  )
}

export default ProductItem