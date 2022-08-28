import Welcome from "./components/Welcome"
import Fruits from "./components/Fruits"
import Userprofile from "./components/Userprofile";
import Background from "./components/Background";
import Cart from "./components/Cart";
import Mixer from "./components/Mixer";
import MultiRangeSlider from './components/MultiRangeSlider/MultiRangeSlider'

import axios from 'axios';
import React, {useEffect, useState} from 'react';

function App() {
  
  //setting up state to update the Mixer
  const [mixFruits, setMixFruits] = useState([]);

  //setting up state to update the Cart
  const [cart, setCart] = useState([]);

  //axios fetch
  const [fruitData, setFruitData] = useState([]);

    const fetchData =()=>{
      axios.get('http://localhost:5000/api/fruits')
        .then((res) => {
          setFruitData(res.data)
        })
    }

    useEffect(()=>{
      fetchData();
    },[])
    
    const fruits = fruitData;

  
  //add and remove button for fruitlist to mixer array

    const onAdd = (fruit) => {
        const exist = mixFruits.find((x) => x._id === fruit._id);
          if (exist) { alert("fruit already in the cart")
            } else {
              const newMixFruits = [...mixFruits, {...fruit, qty: 1 }];
              setMixFruits(newMixFruits);
              localStorage.setItem('mixFruits', JSON.stringify(newMixFruits))
              };
          console.log("fruit added", fruit);
    };

    const onRemove = (fruit) => {
      const exist = mixFruits.find((x) => x._id === fruit._id);
      if (exist.qty === 1) {
        const newMixFruits = mixFruits.filter((x) => x._id !== fruit._id
        );
        setMixFruits(newMixFruits);
        localStorage.setItem('mixFruits', JSON.stringify(newMixFruits))
      } else {
        const newMixFruits = mixFruits.map((x) =>
        x._id === fruit._id ? { ...exist, qty: exist.qty -1} : x
        );
        setMixFruits(newMixFruits);
        localStorage.setItem('mixFruits', JSON.stringify(newMixFruits))

      }
      console.log("fruit deleted", exist.qty, fruit)
    };

/*     const onAddToCart = (newMixFruits) => {
        
          if (newMixFruits.length = 3) { 
            const cart = newMixFruits => 
            x._id === fruit._id ? { ...exist, qty: exist.qty + 1 }  : x );
            setCart(cart)
            } else {
              const newMixFruits = [...mixFruits, {...fruit, qty: 1 }];
              setCart(cart);
              localStorage.setItem('mixFruits', JSON.stringify(newMixFruits))
              };
          console.log("fruit added", fruit);
    }; */

//add and remove from cart
const onAddToCart = (mixedFruits) => {
        const newMixedFruits = [...mixedFruits, {...mixFruits, qty: 1 }];
        setCart(newMixedFruits);
        localStorage.setItem('cart', JSON.stringify(newMixedFruits))
        };
    console.log("fruit added", mixFruits);








    useEffect(()=> {   
      setMixFruits(
        localStorage.getItem('mixFruits')
        ? JSON.parse(localStorage.getItem('mixFruits'))
        : []
      );
    },[]);

  return (
    <div className="App">
      <Background />

      <Welcome />
      <div className="row">

      <Fruits 
        fruits={fruits} 
        onAdd={onAdd} 
        onRemove={onRemove} 
        mixFruits={mixFruits}
      />

      <Mixer 
          onAdd={onAdd} 
          onRemove={onRemove} 
          onAddToCart={onAddToCart}
          mixFruits={mixFruits} 
          countMixFruits={mixFruits.length}
          MultiRangeSlider={MultiRangeSlider}
      />

      <Userprofile />

      <Cart 
          mixFruits = {mixFruits} 
          countMixFruits={mixFruits.length} 
      />
      </div>
    </div>
  );
};

export default App;
