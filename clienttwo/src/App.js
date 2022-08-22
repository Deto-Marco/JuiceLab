import Welcome from "./components/Welcome"
import Fruits from "./components/Fruits"
import Userprofile from "./components/Userprofile";
import Background from "./components/Background";
import Cart from "./components/Cart";
import Mixer from "./components/Mixer";
import axios from 'axios';
import React, {useEffect, useState} from 'react';

function App() {

  //axios fetch
  const [fruits, setFruits] = useState([]);

    const fetchData =()=>{
      axios.get('http://localhost:5000/api/fruits')
        .then((res) => {
          setFruits(res.data)
        })
    }

    useEffect(()=>{
      fetchData();
    },[])
    
  
  //setting up state to update the Mixer
  const [mixFruits, setMixFruits] = useState([]);

  //add and remove button for fruitlist to mixer array

    const onAdd = (fruit) => {
        const exist = mixFruits.find((x) => x.id === fruit.id);
          if (exist) { 
            setMixFruits(
              mixFruits.map((x) =>
                x.id === fruit.id ? { ...exist, qty: exist.qty + 1 } : x
                )            
              );
            } else {
              setMixFruits([...mixFruits, {...fruit, qty: 1 }] );
      };console.log("fruit added", fruit);
    };

    const onRemove = (fruit) => {
      const exist = mixFruits.find((x) => x.id === fruit.id);
      if (exist.qty === 1) {
        setMixFruits(mixFruits.filter((x) => x.id !== fruit.id));
      } else {
        setMixFruits(
          mixFruits.map((x) => 
          x.id === fruit.id ? { ...exist, qty: exist.qty -1} : x
          )
        );
      }
      console.log("fruit deleted", fruit)
    };



  return (
    <div className="App">
      <Background />
      <Welcome />
      <div className="row">
      <Fruits fruits={fruits} onAdd={onAdd} onRemove={onRemove}/>
      <Mixer mixFruits={mixFruits} countMixFruits={mixFruits.length}  />
      <Userprofile />
      <Cart mixFruits = {mixFruits} countMixFruits={mixFruits.length} />
      </div>
    </div>
  );
};

export default App;
