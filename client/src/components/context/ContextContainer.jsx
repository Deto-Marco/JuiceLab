import React, { useState } from 'react'
import Products from '../Products'
import { MyContext } from './context'

export const ContextContainer = ({children}) => {
    const [cart, setCart] = useState([

    ])
    const addItemToCart = item => setCart([...cart,item])
    /* console.log(MyContext);
    console.log(children); */
  return (
    <MyContext.Provider value={{cart, addItemToCart, setCart}}>
        {children}
    </MyContext.Provider>
  )
}
