import Welcome from "./components/Welcome"
import Fruits from "./components/Fruits"
import Userprofile from "./components/Userprofile";
import Background from "./components/Background";
import Cart from "./components/Cart";
import Mixer from "./components/Mixer";

import data from "./data";
import { useState } from "react";

function App() {
  
  //setting up state to update the Mixer
  const [mixFruits, setMixFruits] = useState([]);
  //Dummy DB
  const {fruits}=data;
  //add and remove button for fruitlist to mixer array

    const onAdd = (fruit) => {
        const exist = mixFruits.find((x) => x.id === fruit.id);
          if (exist ) { 
            const newMixFruits = mixFruits.map((x) =>
            x.id === fruit.id ? {...exist, qty: exist.qty + 1} : x
            );
            setMixFruits(newMixFruits);
            } else {
              const newMixFruits = [...mixFruits, {...fruit, qty: 1 }];
      };console.log("fruit added");
    };

    const onRemove = (fruit) => {
      const exist = mixFruits.find((x) => x.id === fruit.id);
      if (exist.qty === 1) {
        const newMixFruits = mixFruits.filter((x)=> x.id !== fruit.id);
        setMixFruits(mixFruits.filter((x) => x.id !== fruit.id));
      } else {
          const newMixFruits = mixFruits.map((x) => 
          x.id === fruit.id ? { ...exist, qty: exist.qty -1} : x
        );
      }
      console.log("fruit deleted")
    };



  return (
    <main>
      <Background />
      <Welcome />
      <div className="row">
      <Fruits onAdd={onAdd} onRemove={onRemove} fruits={fruits} />
      <Mixer countMixFruits={mixFruits.length}  />
      <Userprofile />
      <Cart/>
      </div>
    </main>
  );
};

export default App;
