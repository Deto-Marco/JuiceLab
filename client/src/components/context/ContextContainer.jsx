import React, { useState } from 'react'
import { MyContext } from './context'

export const ContextContainer = ({children}) => {
    const [cart, setCart] = useState([

    ])
    console.log(MyContext);
    console.log(children);
  return (
    <MyContext.Provider value={{cart, setCart}}>
        {children}
    </MyContext.Provider>
  )
}
