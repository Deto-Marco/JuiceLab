/* const Fruits = (props) => {
  const {mixFruits ,fruits, onAdd, onRemove} = props;
  
  return (
    <div className='fruits'>
      <h2>Choose the Fruits of your desire.</h2>
      {fruits.map((fruit, idx) => (
        <div className='fruit' key={idx}>
          <img src={fruit.image} alt={fruit.name}/>
          <ul>{fruit.name}</ul>
          <ul>{fruit.origin}</ul>
          <button onClick={() => onAdd(fruit)}>+</button>
          <button onClick={()=> onRemove(fruit)}>-</button>
        <br />
        </div>

          ))}
    </div>
  )
}
export default Fruits */

import React from 'react';
import Fruit from './Fruit';

export default function Main(props) {
const {mixFruits ,fruits, onAdd, onRemove} = props
  return (
    <main className="block col-2">
      <h2>Choose the Fruits of your desire.</h2>
      <div className="row">
        {fruits.map((fruit) => (
          <Fruit key={fruit.id} fruit={fruit} onAdd={onAdd}></Fruit>
        ))}
      </div>
    </main>
  );
}