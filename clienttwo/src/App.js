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
  const [cartItem, setCartItem] = useState([]);

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
        let newMixFruits= []
        const exist = mixFruits.find((x) => x._id === fruit._id);
          if (exist) { alert("fruit already in the cart")
            } else {
              if (mixFruits.length === 0) {
                newMixFruits = [...mixFruits, {...fruit, qty: 1, ratio: 100 }];
              }
              else if (mixFruits.length === 1) {
                newMixFruits = [{...mixFruits[0],ratio:50}, {...fruit, qty: 1, ratio: 50 }];
              }
              else {
                newMixFruits = [{...mixFruits[0], ratio:33},{...mixFruits[1], ratio:33}, {...fruit, qty: 1, ratio: 33 }];
              }
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

//add and remove from cart
const onAddToCart = (cartItem, newMixFruits) => {
        const newCartItem = [...mixFruits, {...newMixFruits, qty: 1 }];
        setCartItem(newCartItem);
        localStorage.setItem('cart', JSON.stringify(cartItem._id))
        console.log("cartItem", cartItem._id);
      };



      useEffect(()=> {   
        setCartItem(
          localStorage.getItem('cartItem')
          ? JSON.parse(localStorage.getItem('cartItem'))
          : []
        );
      },[]);

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
        MultiRangeSlider={MultiRangeSlider}
      />

      <Mixer 
          onAddToCart={onAddToCart}
          onAdd={onAdd} 
          onRemove={onRemove} 
          mixFruits={mixFruits} 
          countMixFruits={mixFruits.length}
          MultiRangeSlider={MultiRangeSlider}
          setMixFruits={setMixFruits}
      />

      <Userprofile />

      <Cart 
          mixFruits = {mixFruits} 
          countMixFruits={mixFruits.length}
          cartItem={cartItem}
          key={cartItem._id}
      />
      </div>
    </div>
  );
};

export default App;
